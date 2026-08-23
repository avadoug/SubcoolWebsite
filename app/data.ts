export type ImageRecord = {
  src: string;
  alt: string;
  status: 'Cultivar verified' | 'Botanical reference';
  creator: string;
  sourceLabel: string;
  sourceUrl: string;
  license: string;
  licenseUrl: string;
  note: string;
  objectPosition?: string;
};

export type Cultivar = {
  canonicalId: `cultivar_${string}`;
  lineageClaimId: `claim_${string}`;
  primarySourceId: `source_${string}`;
  id: string;
  name: string;
  lineage: string;
  family: 'Space Queen' | 'Jack the Ripper' | 'Vortex';
  era: string;
  flowering: string;
  status: string[];
  aroma: string[];
  effect: string;
  story: string;
  confidence: 'Documented' | 'Well supported';
  researchUrl: string;
  researchLabel: string;
  image: ImageRecord;
};

const chernobylImage: ImageRecord = {
  src: '/images/chernobyl-jordan-greentree.jpg',
  alt: 'Flowering Chernobyl cannabis plant bred from TGA seed',
  status: 'Cultivar verified',
  creator: 'Jordan Greentree',
  sourceLabel: 'Flickr source record',
  sourceUrl: 'https://www.flickr.com/photos/jordangreentree/13550911833/',
  license: 'CC BY-SA 2.0',
  licenseUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  note: 'The photographer identifies the plant as Chernobyl grown from TGA seed. Display crop only.',
  objectPosition: '50% 46%',
};

const pexelsLeaves: ImageRecord = {
  src: '/images/botanical-leaves-mark-stebnicki.jpg',
  alt: 'Sunlit cannabis leaves used as a botanical reference image',
  status: 'Botanical reference',
  creator: 'Mark Stebnicki',
  sourceLabel: 'Pexels photo 8658552',
  sourceUrl: 'https://www.pexels.com/photo/close-up-photo-of-marijuana-plant-8658552/',
  license: 'Pexels License',
  licenseUrl: 'https://www.pexels.com/license/',
  note: 'Rights-cleared atmosphere only. This is not presented as a photograph of the named cultivar.',
  objectPosition: '50% 50%',
};

const pexelsOutdoor: ImageRecord = {
  src: '/images/botanical-outdoor-mark-stebnicki.jpg',
  alt: 'Outdoor cannabis plant used as a botanical reference image',
  status: 'Botanical reference',
  creator: 'Mark Stebnicki',
  sourceLabel: 'Pexels photo 8658540',
  sourceUrl: 'https://www.pexels.com/photo/close-up-photo-of-marijuana-plant-8658540/',
  license: 'Pexels License',
  licenseUrl: 'https://www.pexels.com/license/',
  note: 'Rights-cleared atmosphere only. Cultivar identity is not claimed.',
  objectPosition: '50% 58%',
};

const pexelsMacro: ImageRecord = {
  src: '/images/botanical-macro-cannafornia.jpg',
  alt: 'Detailed cannabis growth used as a botanical reference image',
  status: 'Botanical reference',
  creator: 'Cannafornia',
  sourceLabel: 'Pexels photo 5810899',
  sourceUrl: 'https://www.pexels.com/photo/close-up-photo-of-marijuana-plant-5810899/',
  license: 'Pexels License',
  licenseUrl: 'https://www.pexels.com/license/',
  note: 'Rights-cleared atmosphere only. Cultivar identity is not claimed.',
  objectPosition: '50% 45%',
};

const botanicalPlate: ImageRecord = {
  src: '/images/botanical-plate-thome.jpg',
  alt: 'Historical botanical plate of Cannabis sativa used as an archival stand-in',
  status: 'Botanical reference',
  creator: 'Otto Wilhelm Thomé',
  sourceLabel: 'Wikimedia Commons',
  sourceUrl: 'https://commons.wikimedia.org/wiki/File:Illustration_Cannabis_sativa0_clean.jpg',
  license: 'Public domain',
  licenseUrl: 'https://creativecommons.org/publicdomain/mark/1.0/',
  note: 'A public-domain botanical plate used where no cultivar-specific licensed photograph was verified.',
  objectPosition: '50% 41%',
};

export const cultivars: Cultivar[] = [
  {
    canonicalId: 'cultivar_000001',
    lineageClaimId: 'claim_000001',
    primarySourceId: 'source_000001',
    id: 'chernobyl',
    name: 'Chernobyl',
    lineage: 'Trainwreck × Trinity × Jack the Ripper',
    family: 'Jack the Ripper',
    era: 'Golden TGA era',
    flowering: '8–9 weeks reported',
    status: ['Cult favorite', 'Verified photo'],
    aroma: ['lime peel', 'pine', 'tropical funk'],
    effect: 'Frequently described as bright, expansive, and long-running; experience varies by phenotype and dose.',
    story: 'A three-way cross that became one of TGA’s most recognizable resin-heavy sativa-leaning releases.',
    confidence: 'Well supported',
    researchUrl: 'https://www.flickr.com/photos/jordangreentree/13550911833/',
    researchLabel: 'Contemporary grow record',
    image: chernobylImage,
  },
  {
    canonicalId: 'cultivar_000002',
    lineageClaimId: 'claim_000002',
    primarySourceId: 'source_000002',
    id: 'vortex',
    name: 'Vortex',
    lineage: 'Apollo 13 × Space Queen',
    family: 'Space Queen',
    era: 'Golden TGA era',
    flowering: '7–8 weeks reported',
    status: ['Cup winner', 'Foundational parent'],
    aroma: ['lemon candy', 'mango', 'incense'],
    effect: 'Reported as fast, soaring, and intensely cerebral rather than sleepy.',
    story: 'A compact expression of Apollo and Space Queen that became both an award winner and a recurrent breeding tool.',
    confidence: 'Well supported',
    researchUrl: 'https://growdiaries.com/seedbank/tgagenetics/vortex',
    researchLabel: 'Archived breeder listing',
    image: pexelsMacro,
  },
  {
    canonicalId: 'cultivar_000003',
    lineageClaimId: 'claim_000003',
    primarySourceId: 'source_000003',
    id: 'jack-the-ripper',
    name: 'Jack the Ripper',
    lineage: 'Jack’s Cleaner × Space Queen',
    family: 'Jack the Ripper',
    era: 'Early / golden TGA',
    flowering: '8–9 weeks reported',
    status: ['Foundational parent', 'Classic'],
    aroma: ['lemon cleaner', 'pine', 'sharp citrus'],
    effect: 'Commonly characterized as electric, alert, and potentially intense for sensitive users.',
    story: 'The seed-line bridge from the treasured Jack’s Cleaner cut into a broad family of sharp-citrus TGA hybrids.',
    confidence: 'Documented',
    researchUrl: 'https://www.weedworldmagazine.org/2018/04/11/strain-report-the-ripper-effect-by-subcool/',
    researchLabel: 'Subcool strain report',
    image: pexelsOutdoor,
  },
  {
    canonicalId: 'cultivar_000004',
    lineageClaimId: 'claim_000004',
    primarySourceId: 'source_000004',
    id: 'agent-orange',
    name: 'Agent Orange',
    lineage: 'Orange Velvet × Jack the Ripper',
    family: 'Jack the Ripper',
    era: 'Golden TGA era',
    flowering: '8–9 weeks reported',
    status: ['Classic', 'Collaboration era'],
    aroma: ['orange peel', 'sweet citrus', 'spice'],
    effect: 'Often reported as upbeat and social with a warm, balanced finish.',
    story: 'A citrus-forward cross that paired Orange Velvet’s candy character with the Ripper line’s lift and resin.',
    confidence: 'Well supported',
    researchUrl: 'https://overgrow.com/uploads/short-url/pKek6HDRanmf50RZ7ZIuLHuoXZT.pdf',
    researchLabel: 'Archived catalog listing',
    image: pexelsLeaves,
  },
  {
    canonicalId: 'cultivar_000005',
    lineageClaimId: 'claim_000005',
    primarySourceId: 'source_000005',
    id: 'jillybean',
    name: 'Jillybean',
    lineage: 'Orange Velvet × Space Queen',
    family: 'Space Queen',
    era: 'Golden TGA era',
    flowering: 'About 8 weeks reported',
    status: ['TGA collaboration', 'Cult favorite'],
    aroma: ['orange candy', 'mango', 'jelly bean'],
    effect: 'Grower reports often emphasize a buoyant, sociable, mood-brightening character.',
    story: 'A documented TGA-era collaboration that fused Orange Velvet with the influential Space Queen male line.',
    confidence: 'Documented',
    researchUrl: 'https://weedmaps.com/strains/jilly-bean',
    researchLabel: 'Breeder interview summary',
    image: botanicalPlate,
  },
  {
    canonicalId: 'cultivar_000006',
    lineageClaimId: 'claim_000006',
    primarySourceId: 'source_000006',
    id: 'querkle',
    name: 'Querkle',
    lineage: 'Purple Urkle × Space Queen',
    family: 'Space Queen',
    era: 'Golden TGA era',
    flowering: 'About 8 weeks reported',
    status: ['Purple line', 'Foundational parent'],
    aroma: ['grape skin', 'lemon', 'berry musk'],
    effect: 'Usually framed as dreamy and relaxing while retaining some Space Queen lift.',
    story: 'Subcool’s attempt to carry a favored Purple Urkle expression into a vigorous, seed-grown purple family.',
    confidence: 'Documented',
    researchUrl: 'https://weedmaps.com/strains/querkle',
    researchLabel: 'Breeder interview summary',
    image: pexelsMacro,
  },
  {
    canonicalId: 'cultivar_000007',
    lineageClaimId: 'claim_000007',
    primarySourceId: 'source_000007',
    id: 'plushberry',
    name: 'Plushberry',
    lineage: 'Black Cherry Soda × Space Queen',
    family: 'Space Queen',
    era: 'Golden TGA era',
    flowering: '8–10 weeks reported',
    status: ['Fruit-forward', 'TGA original'],
    aroma: ['blackberry', 'cherry soda', 'earth'],
    effect: 'Typically described as soft, settling, and more body-led than the electric TGA sativas.',
    story: 'A color-rich berry project whose published selection story put aroma and flavor ahead of magenta bag appeal.',
    confidence: 'Documented',
    researchUrl: 'https://mzjill.com/strain/plushberry/',
    researchLabel: 'TGA-era lineage record',
    image: pexelsLeaves,
  },
  {
    canonicalId: 'cultivar_000008',
    lineageClaimId: 'claim_000008',
    primarySourceId: 'source_000008',
    id: 'timewreck',
    name: 'Timewreck',
    lineage: 'Blood Wreck × Vortex',
    family: 'Vortex',
    era: 'Later TGA era',
    flowering: '8–9 weeks reported',
    status: ['Cup recognized', 'Vortex family'],
    aroma: ['sour fruit', 'lime', 'sandalwood'],
    effect: 'Community reports repeatedly call it forceful and disorienting at higher amounts.',
    story: 'A high-impact Vortex descendant that joined Trainwreck-family intensity to Subcool’s cup-winning selection.',
    confidence: 'Well supported',
    researchUrl: 'https://growdiaries.com/seedbank/tgagenetics/timewreck',
    researchLabel: 'Archived breeder listing',
    image: pexelsOutdoor,
  },
];

export const imageLedger = [chernobylImage, pexelsLeaves, pexelsOutdoor, pexelsMacro, botanicalPlate];
