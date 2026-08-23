import Image from 'next/image';
import StrainExplorer from './components/StrainExplorer';
import { cultivars, imageLedger } from './data';

export default function Home() {
  return (
    <main>
      <nav className="archive-nav" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="The Dank Archive home">
          <span className="mark">D/A</span>
          <span>The Dank Archive</span>
        </a>
        <div className="nav-links">
          <a href="#explorer">Cultivars</a>
          <a href="#universe">Genetics</a>
          <a href="#ledger">Image ledger</a>
        </div>
        <a className="nav-index" href="#explorer">Open index <span>↘</span></a>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Montgomery “Monty” Ball — Subcool</p>
          <h1>Genetics with<br /><em>a point of view.</em></h1>
          <p className="lede">
            A living field guide to TGA’s fruit-forward, resin-minded breeding legacy—built
            from citations, grower memory, and photographs whose rights can be traced.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#explorer">Enter the cultivar index <span>↘</span></a>
            <a className="button text" href="#ledger">How images are verified</a>
          </div>
          <dl className="archive-counts" aria-label="Archive counts">
            <div><dt>08</dt><dd>documented cultivar records</dd></div>
            <div><dt>01</dt><dd>verified cultivar photograph</dd></div>
            <div><dt>05</dt><dd>rights-cleared image sources</dd></div>
          </dl>
        </div>

        <figure className="hero-plate">
          <div className="image-shell">
            <Image
              src="/images/chernobyl-jordan-greentree.jpg"
              alt="Flowering Chernobyl cannabis plant bred from TGA seed"
              fill
              priority
              sizes="(max-width: 900px) 100vw, 48vw"
            />
            <span className="image-no">№ 001</span>
            <span className="license-chip">Cultivar verified · CC BY-SA 2.0</span>
          </div>
          <figcaption>
            <div>
              <p className="kicker">Specimen record</p>
              <h2>Chernobyl</h2>
              <p className="lineage">Trainwreck × Trinity × Jack the Ripper</p>
            </div>
            <div className="sensory">
              <span>Citrus rind</span><span>Pine</span><span>Electric</span>
            </div>
          </figcaption>
        </figure>
      </section>

      <aside className="archive-notice" aria-label="Archive image policy">
        <p><b>Archive note 001</b></p>
        <p>
          Only Chernobyl currently has a strain-specific photograph with reuse rights we could verify.
          Other cards use visibly labeled botanical references—not counterfeit cultivar photos.
        </p>
        <a href="#ledger">Inspect the ledger ↘</a>
      </aside>

      <StrainExplorer cultivars={cultivars} />

      <section className="universe" id="universe" aria-labelledby="universe-title">
        <div className="universe-copy">
          <p className="section-index">03 / GENETIC UNIVERSE</p>
          <h2 id="universe-title">One male.<br /><em>A sky full of fruit.</em></h2>
          <p>
            Space Queen appears again and again because the selected male—widely remembered as
            “Space Dude”—became a central engine of the TGA library. This first map reveals only
            the relationships in the current research set.
          </p>
          <a href="#explorer">Filter the Space Queen family ↗</a>
        </div>
        <div className="orbit" role="img" aria-label="Diagram showing Space Queen connected to Vortex, Jack the Ripper, Jillybean, Querkle, and Plushberry">
          <span className="orbit-ring ring-one" />
          <span className="orbit-ring ring-two" />
          <div className="node hub"><b>Space Queen</b><small>Romulan × C99</small></div>
          <div className="node node-vortex"><b>Vortex</b><small>Apollo 13</small></div>
          <div className="node node-jtr"><b>Jack the Ripper</b><small>Jack’s Cleaner</small></div>
          <div className="node node-jilly"><b>Jillybean</b><small>Orange Velvet</small></div>
          <div className="node node-querkle"><b>Querkle</b><small>Purple Urkle</small></div>
          <div className="node node-plush"><b>Plushberry</b><small>Black Cherry Soda</small></div>
        </div>
      </section>

      <section className="ledger" id="ledger" aria-labelledby="ledger-title">
        <header className="ledger-heading">
          <p className="section-index">04 / IMAGE RIGHTS LEDGER</p>
          <h2 id="ledger-title">No mystery meat<br /><em>in the image library.</em></h2>
          <p>
            Every downloaded file keeps its creator, source, license, and identity status attached.
            A botanical reference is never allowed to quietly become “the strain.”
          </p>
        </header>
        <div className="ledger-grid">
          {imageLedger.map((record, index) => (
            <article className="ledger-card" key={record.src}>
              <div className="ledger-image">
                <Image src={record.src} alt={record.alt} fill sizes="(max-width: 720px) 100vw, 33vw" style={{ objectPosition: record.objectPosition }} />
                <span>{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="ledger-copy">
                <p className={record.status === 'Cultivar verified' ? 'ledger-status verified' : 'ledger-status'}>{record.status}</p>
                <h3>{record.creator}</h3>
                <p>{record.note}</p>
                <dl>
                  <div><dt>Source</dt><dd>{record.sourceLabel}</dd></div>
                  <div><dt>Rights</dt><dd>{record.license}</dd></div>
                </dl>
                <div className="ledger-links">
                  <a href={record.sourceUrl} target="_blank" rel="noreferrer">Source ↗</a>
                  <a href={record.licenseUrl} target="_blank" rel="noreferrer">License ↗</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="method" aria-labelledby="method-title">
        <div>
          <p className="section-index">05 / RESEARCH METHOD</p>
          <h2 id="method-title">Fewer real records<br />beat a hundred inventions.</h2>
        </div>
        <div className="method-copy">
          <p>
            Lineage is separated from sensory reporting. “Documented” is reserved for a direct
            breeder-era statement or surviving TGA record; “well supported” means independent
            credible records agree. Aroma and effect language remains explicitly observational,
            never clinical advice.
          </p>
          <ol>
            <li><span>01</span><div><b>Start close to the breeder</b><p>Subcool-authored reports and surviving TGA-era material come first.</p></div></li>
            <li><span>02</span><div><b>Keep uncertainty visible</b><p>No reliable lab value? The archive declines to manufacture precision.</p></div></li>
            <li><span>03</span><div><b>Trace every image</b><p>Source, creator, license, and cultivar identity travel together.</p></div></li>
          </ol>
        </div>
      </section>

      <footer>
        <div className="wordmark"><span className="mark">D/A</span><span>The Dank Archive</span></div>
        <p>An independent educational archive · No seeds are sold here · Adult audience</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
