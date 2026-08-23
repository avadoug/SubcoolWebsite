'use client';

import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';
import type { Cultivar } from '../data';

const filters = ['All', 'Space Queen', 'Jack the Ripper', 'Vortex', 'Verified photo'] as const;

export default function StrainExplorer({ cultivars }: { cultivars: Cultivar[] }) {
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [selected, setSelected] = useState<Cultivar | null>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return cultivars.filter((cultivar) => {
      const matchesFilter = filter === 'All'
        || (filter === 'Verified photo' && cultivar.image.status === 'Cultivar verified')
        || cultivar.family === filter;
      const haystack = [cultivar.name, cultivar.lineage, cultivar.family, cultivar.aroma.join(' ')].join(' ').toLowerCase();
      return matchesFilter && (!needle || haystack.includes(needle));
    });
  }, [cultivars, filter, query]);

  useEffect(() => {
    if (!selected) return;
    const onKey = (event: KeyboardEvent) => event.key === 'Escape' && setSelected(null);
    document.body.classList.add('modal-open');
    window.addEventListener('keydown', onKey);
    closeButton.current?.focus();
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', onKey);
    };
  }, [selected]);

  function smokeTheDice() {
    const pool = visible.length ? visible : cultivars;
    setSelected(pool[Math.floor(Math.random() * pool.length)]);
  }

  return (
    <section className="explorer" id="explorer" aria-labelledby="explorer-title">
      <header className="explorer-heading">
        <div>
          <p className="section-index">02 / CULTIVAR INDEX</p>
          <h2 id="explorer-title">Follow the flavor.<br /><em>Trace the family.</em></h2>
        </div>
        <p className="explorer-intro">
          Eight documented starting points—not a fake complete catalog. Search names,
          lineages, families, or sensory notes, then open a record for its evidence and image rights.
        </p>
      </header>

      <div className="explorer-tools">
        <label className="search-field">
          <span>Search the archive</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Try Space Queen or citrus"
          />
        </label>
        <button className="dice-button" type="button" onClick={smokeTheDice}>
          <span aria-hidden="true">✦</span> Smoke the dice
        </button>
      </div>

      <div className="filter-row" aria-label="Filter cultivars">
        {filters.map((item) => (
          <button
            type="button"
            className={filter === item ? 'filter active' : 'filter'}
            aria-pressed={filter === item}
            onClick={() => setFilter(item)}
            key={item}
          >
            {item}
          </button>
        ))}
        <span className="result-count" aria-live="polite">{visible.length.toString().padStart(2, '0')} records</span>
      </div>

      {visible.length ? (
        <div className="strain-grid">
          {visible.map((cultivar, index) => (
            <article className={`strain-card card-${index % 4}`} key={cultivar.id}>
              <button className="card-open" type="button" onClick={() => setSelected(cultivar)} aria-label={`Open ${cultivar.name} record`}>
                <div className="card-image">
                  <Image
                    src={cultivar.image.src}
                    alt={cultivar.image.alt}
                    fill
                    sizes="(max-width: 680px) 100vw, (max-width: 1100px) 50vw, 33vw"
                    style={{ objectPosition: cultivar.image.objectPosition }}
                  />
                  <span className={`visual-status ${cultivar.image.status === 'Cultivar verified' ? 'verified' : ''}`}>
                    {cultivar.image.status}
                  </span>
                  <span className="record-number">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="card-copy">
                  <p>{cultivar.family} family</p>
                  <h3>{cultivar.name}</h3>
                  <p className="card-lineage">{cultivar.lineage}</p>
                  <div className="aroma-row">
                    {cultivar.aroma.slice(0, 3).map((note) => <span key={note}>{note}</span>)}
                  </div>
                  <span className="open-label">Open record <b>↗</b></span>
                </div>
              </button>
              <p className="card-credit">
                Visual: {cultivar.image.creator} · {cultivar.image.license}
              </p>
            </article>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <p>That genetic trail is not in this first research set.</p>
          <button type="button" onClick={() => { setQuery(''); setFilter('All'); }}>Reset the index</button>
        </div>
      )}

      {selected && (
        <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setSelected(null)}>
          <section className="record-modal" role="dialog" aria-modal="true" aria-labelledby="record-title">
            <button ref={closeButton} className="modal-close" type="button" onClick={() => setSelected(null)} aria-label="Close cultivar record">×</button>
            <div className="modal-visual">
              <Image
                src={selected.image.src}
                alt={selected.image.alt}
                fill
                sizes="(max-width: 760px) 100vw, 48vw"
                style={{ objectPosition: selected.image.objectPosition }}
              />
              <span className={`visual-status ${selected.image.status === 'Cultivar verified' ? 'verified' : ''}`}>
                {selected.image.status}
              </span>
            </div>
            <div className="modal-copy">
              <p className="section-index">{selected.canonicalId.toUpperCase()} / {selected.confidence.toUpperCase()}</p>
              <h2 id="record-title">{selected.name}</h2>
              <p className="modal-lineage">{selected.lineage}</p>
              <div className="record-facts">
                <div><span>Family</span><strong>{selected.family}</strong></div>
                <div><span>Era</span><strong>{selected.era}</strong></div>
                <div><span>Flower</span><strong>{selected.flowering}</strong></div>
              </div>
              <p className="record-story">{selected.story}</p>
              <div className="modal-notes">
                <div>
                  <h3>The jar</h3>
                  <p>{selected.aroma.join(' · ')}</p>
                </div>
                <div>
                  <h3>Reported character</h3>
                  <p>{selected.effect}</p>
                </div>
              </div>
              <div className="modal-provenance">
                <p><b>Lineage claim:</b> {selected.lineageClaimId} · <b>Primary source:</b> {selected.primarySourceId}</p>
                <p><b>Image status:</b> {selected.image.note}</p>
                <div>
                  <a href={selected.image.sourceUrl} target="_blank" rel="noreferrer">Image source ↗</a>
                  <a href={selected.image.licenseUrl} target="_blank" rel="noreferrer">{selected.image.license} ↗</a>
                  <a href={selected.researchUrl} target="_blank" rel="noreferrer">{selected.researchLabel} ↗</a>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  );
}
