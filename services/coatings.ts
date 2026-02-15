import type { IndustryConfig } from './industries-types';

export const BINDERS_INTRO =
  'Tawazon Coatings Division supplies raw materials for paints and coatings, offering resins, pigments, additives, and solvents for industrial and decorative applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.';

const BINDERS_CATEGORIES_DATA = [
  {
    id: 'epoxy-resins-hardeners',
    title: 'Epoxy Resins & Hardeners',
    description:
      'Epoxy resins and hardeners are essential in industrial coatings, providing exceptional strength and resistance to corrosion, making them ideal for demanding environments.',
    products: [
      {
        name: 'Epotec YD 128',
        description:
          'Unmodified bisphenol-A epoxy resin. General purpose resin. Brookfield viscosity @ 25°C 11,000 to 14,000 cP. Mainly used for protective coatings, underwater coatings, structural adhesives, and civil engineering applications.',
      },
      {
        name: 'Epotec YD 902',
        description:
          'Conventional solid medium molecular weight (standard viscosity) epoxy resin. Suitable for hybrid/pure epoxy powder coating. Melt viscosity 2,200 to 3,500.',
      },
      {
        name: 'Epotec YD903HE',
        description:
          'Suitable for hybrid/pure epoxy powder coating. Brookfield melt viscosity @ 25°C 7,000–10,200 cP.',
      },
      {
        name: 'Epotec YD522',
        description:
          'Bisphenol-A liquid epoxy resin modified with reactive diluent. Viscosity 500 to 700. Mainly used for civil engineering applications, adhesives, and low VOC coatings.',
      },
      {
        name: 'Epotec YD 011X-75',
        description:
          'Solvent-cut bisphenol-A based Epotec® epoxy resins have medium molecular weight. Brookfield viscosity @ 25°C 8,000–13,000 cP. Mainly used in protective coatings, marine paints, and varnishes.',
      },
      {
        name: 'Hardener Epotec TH 7940',
        description:
          'It acts as a curing agent. It is designed for fast cure and is capable of curing at low temperatures and even in high humidity conditions. Brookfield viscosity @ 25°C 2,000–3,000 cP.',
      },
      {
        name: 'Epotec TH7515X70',
        description:
          'Solution-cut polyamide providing high flexibility and long pot life. Brookfield viscosity @ 25°C 7,500–12,500 cP. Curing agents possess low yellowing tendency.',
      },
      {
        name: 'Epotec TH 7515',
        description:
          'Very high viscosity polyamide providing high flexibility and long pot life. Brookfield viscosity @ 25°C 3,200–4,200 cP. Curing agents possess low yellowing tendency.',
      },
      {
        name: 'Epotec TH 7301',
        description:
          'Modified cycloaliphatic amines are room temperature curing agents. They offer excellent color stability, providing a high-gloss surface with good chemical resistance. Curing agents possess low yellowing tendency.',
      },
      {
        name: 'Epotec TH 7302',
        description:
          'Modified cycloaliphatic amines are room temperature curing agents. They offer high mechanical strength and resistance to amine blush and water spotting. Curing agents possess low yellowing tendency.',
      },
      {
        name: 'Epotec THW 4504',
        description:
          'Epotec® waterborne curing agents are based on modified polyamines. They offer high strength, low color, easy spreading, and can be diluted with water. They can emulsify liquid epoxy and are easy to clean.',
      },
      {
        name: 'Epotec RD 103',
        description:
          '1,4-Butanediol diglycidyl ether – good property retention, moderate diluent. Difunctional aliphatic reactive diluent.',
      },
      {
        name: 'Epotec RD 108',
        description:
          'C12–C14 glycidyl ether – good diluent and morphology, improved impact strength. Monofunctional aliphatic reactive diluent.',
      },
      {
        name: 'Polyamide Resin HP 100115',
        description:
          'Used in combination with liquid epoxy for solvent-less coatings for steel, potting, impregnation, and adhesives. Also used in the construction industry and protective coatings.',
      },
      {
        name: 'Additol Powder',
        description:
          'Curing hardeners (powder coating crosslinkers) – polyanhydride resin for epoxy-functional (glycidyl) acrylics and urethane hardeners for hydroxyl-functional binder resins.',
      },
      {
        name: 'Beckopox EH694',
        description:
          'Curing hardeners (powder coating crosslinkers) – anhydride-like resin for epoxy or hydroxyl-functional binder resins.',
      },
      {
        name: 'Synthacryl S700',
        description:
          'Glycidyl-functionalized polyacrylic resin designed as a matting hardener for carboxylated polyester resins. Used in coatings based on carboxylic polyesters.',
      },
      {
        name: 'Cymel 303 LF',
        description:
          'Highly methylated, monomeric melamine crosslinker supplied in liquid form. Insoluble in water, it shows excellent compatibility with water-soluble backbone polymers.',
      },
      {
        name: 'Cycat XK 406 N',
        description:
          'Light to dark reddish-colored, low-viscosity liquid, phosphoric acid derivative. It increases the crosslinking speed of heat-curing coating systems based on phenolic/epoxide resin combinations.',
      },
      {
        name: 'Cycat 4045',
        description:
          'Cycat 4045 catalyst is an amine-blocked para-toluene sulfonic acid catalyst. It is recommended for accelerating the cure response of amino crosslinking resins.',
      },
      {
        name: 'Duranate 22A-75PX',
        description:
          'Hexamethylene diisocyanate (HDI) with urethane resin compatibility. Acts as a curing agent, providing excellent color retention and outstanding performance.',
      },
    ],
  },
  {
    id: 'acrylic-emulsions',
    title: 'Acrylic Emulsions',
    description:
      'These emulsions are water-based binders that offer flexibility and durability in applications such as architectural coatings and general-purpose paints.',
    products: [
      { name: 'Revacryl 246', description: 'Styrene-acrylic copolymer dispersion (50% solid) with excellent water and weather resistance, functioning as a universal binder.' },
      { name: 'Revacryl AE 3020JA', description: 'Acrylic ester-styrene copolymer for construction applications, including waterproofing and ceramic tile adhesives.' },
      { name: 'Revacryl AE 4620', description: 'Styrene-acrylic ester copolymer (50% solid) characterized as a universal binder with low odor.' },
      { name: 'Revacryl AE 4625', description: 'Styrene-acrylic ester copolymer (50% solid) commonly used as an additive in paint and adhesive applications.' },
      { name: 'Plextol D512', description: 'Methacrylic ester-acrylic ester copolymer (49-50% solid) used in high-grade, non-yellowing paints, plasters, and coatings.' },
      { name: 'Plextol D507', description: 'Methacrylic ester-acrylic ester copolymer for concrete roof tile coating production.' },
      { name: 'Plextol D561', description: 'Methacrylic ester-acrylic ester copolymer (49-50% solid) for high-grade paints, plasters, and coatings.' },
      { name: 'Emultex 3155', description: 'Vinyl acetate copolymer (50% solid) serving as a universal paint binder for masonry coatings.' },
      { name: 'Lipaton 5843-SBR', description: 'Styrene-butadiene copolymer aqueous dispersion used in sealers, primers, and cement-based anti-corrosion paints.' },
    ],
  },
  {
    id: 'alkyd-resins',
    title: 'Alkyd Resins',
    description:
      'Alkyd resins provide excellent gloss and durability for decorative and industrial coatings, with versatile formulation options for various applications.',
    products: [
      { name: 'Alkyd Resin AR 100', description: 'Short oil alkyd resin for fast-drying industrial coatings and wood finishes.' },
      { name: 'Alkyd Resin AR 200', description: 'Medium oil alkyd resin offering balanced drying and flexibility for decorative paints.' },
      { name: 'Alkyd Resin AR 300', description: 'Long oil alkyd resin for exterior architectural coatings with excellent durability.' },
      { name: 'Alkyd Resin AR 400', description: 'Modified alkyd resin for high-gloss industrial and automotive coatings.' },
    ],
  },
  {
    id: 'polyurethane-resins',
    title: 'Polyurethane Resins',
    description:
      'Polyurethane resins deliver superior chemical resistance and mechanical properties for high-performance coating systems.',
    products: [
      { name: 'PU Resin 500', description: 'Aliphatic polyurethane dispersion for weatherable topcoats and clear finishes.' },
      { name: 'PU Resin 600', description: 'Aromatic polyurethane for industrial floor coatings and heavy-duty applications.' },
      { name: 'PU Resin 700', description: 'Two-component polyurethane for high-performance protective coatings.' },
    ],
  },
  {
    id: 'polyester-resins',
    title: 'Polyester Resins',
    description:
      'Polyester resins offer good weatherability and flexibility, suitable for coil coatings and powder coatings applications.',
    products: [
      { name: 'Polyester PE 100', description: 'Carboxylated polyester for powder coatings with excellent flow and leveling.' },
      { name: 'Polyester PE 200', description: 'Hydroxyl-functional polyester for coil coating applications.' },
      { name: 'Polyester PE 300', description: 'Saturated polyester for high-durability industrial coatings.' },
    ],
  },
  {
    id: 'vinyl-acrylic-copolymers',
    title: 'Vinyl & Acrylic Copolymers',
    description:
      'Vinyl and acrylic copolymers provide versatile binding solutions for a wide range of coating formulations and substrates.',
    products: [
      { name: 'VA Copolymer 100', description: 'Vinyl acetate-acrylic copolymer for interior and exterior paints.' },
      { name: 'VA Copolymer 200', description: 'High-performance vinyl-acrylic for textured coatings and plasters.' },
      { name: 'VA Copolymer 300', description: 'Flexible vinyl-acrylic for elastomeric coatings and sealants.' },
    ],
  },
];

export const COATINGS_CONFIG: IndustryConfig = {
  slug: 'coatings',
  name: 'Coatings',
  breadcrumb: 'Coatings',
  intro: BINDERS_INTRO,
  overview:
    'For over three decades, Tawazon has been a leading supplier of high-performance raw materials for the coatings industry. Its extensive portfolio includes binders, pigments, additives, and specialty extenders, serving both decorative and industrial segments. The company caters to diverse applications such as automotive, epoxy, coil, and aerospace coatings, ensuring products that meet the highest standards of quality and performance.',
  categories: [
    {
      id: 'binders',
      title: 'Binders',
      description: BINDERS_INTRO,
      subcategories: BINDERS_CATEGORIES_DATA,
      products: [],
    },
  ],
  otherCards: [
    {
      name: 'Pigments',
      description:
        'Tawazon Inks Division supplies high-performance pigments and vehicles for printing and packaging, offering a wide range of colors and formulations for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:plant-2-linear',
      link: '/industries/inks',
    },
    {
      name: 'Additives',
      description:
        'Tawazon Construction Chemicals Division supplies specialty chemicals for construction, offering admixtures, waterproofing, and repair solutions for modern infrastructure. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:factory-linear',
      link: '/industries/construction-chemicals',
    },
    {
      name: 'Specialty Extenders',
      description:
        'Tawazon Plastics Division supplies masterbatches and polymers for injection and extrusion molding, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:cup-linear',
      link: '/industries/plastics',
    },
  ],
};

/** @deprecated Use COATINGS_CONFIG.categories[0].subcategories */
export const BINDERS_CATEGORIES = BINDERS_CATEGORIES_DATA;
