import type { IndustryConfig } from './industries-types';

export const PACKAGING_CONFIG: IndustryConfig = {
  slug: 'packaging',
  name: 'Packaging',
  breadcrumb: 'Packaging',
  directViewProducts: true,
  intro:
    'Tawazon Packaging Division supplies specialty raw materials for the packaging industry, including zippers, tapes, aluminum foils, and adhesives. With a focus on flexible and rigid packaging, it ensures high-quality and reliable solutions for packaging converters.',
  overview:
    'Tawazon Packaging Division supplies films, adhesives, and specialty materials for flexible and rigid packaging. We serve converters and brand owners with solutions for food, pharmaceutical, and industrial packaging.',
  categories: [
    {
      id: 'films',
      title: 'Films',
      description:
        'Flexible films for packaging including BOPP, PE, and specialty barrier films.',
      products: [
        {
          name: 'BOPP Film BF-100',
          description:
            'Biaxially oriented polypropylene film for labels and flexible packaging.',
        },
        {
          name: 'PE Film PF-200',
          description:
            'Polyethylene film for stretch wrap and packaging applications.',
        },
      ],
    },
    {
      id: 'aluminum-foil',
      title: 'Aluminum Foil',
      description:
        'Aluminum foil and laminates for barrier packaging applications.',
      products: [
        {
          name: 'Aluminum Foil AF-100',
          description:
            'Soft temper aluminum foil for pharmaceutical and food packaging.',
        },
        {
          name: 'Foil Laminate FL-200',
          description:
            'Pre-laminated foil for aseptic and high-barrier packaging.',
        },
      ],
    },
    {
      id: 'adhesives',
      title: 'Adhesives',
      description:
        'Laminating adhesives for flexible packaging and label applications.',
      products: [
        {
          name: 'Laminating Adhesive LA-100',
          description:
            'Two-component polyurethane adhesive for film-to-film lamination.',
        },
        {
          name: 'Cold Seal Adhesive CS-200',
          description:
            'Cold seal adhesive for heat-sensitive packaging applications.',
        },
      ],
    },
    {
      id: 'inks',
      title: 'Inks',
      description:
        'Flexographic and gravure inks for packaging printing.',
      products: [
        {
          name: 'Flexo Ink FI-100',
          description:
            'Water-based flexographic ink for paper and film substrates.',
        },
        {
          name: 'Gravure Ink GI-200',
          description:
            'Solvent-based gravure ink for high-speed packaging printing.',
        },
      ],
    },
    {
      id: 'extrusion-coated-paper',
      title: 'Extrusion Coated Paper',
      description:
        'Extrusion-coated paper and board for packaging applications.',
      products: [
        {
          name: 'PE Coated Paper EC-100',
          description:
            'Polyethylene extrusion-coated paper for liquid packaging.',
        },
      ],
    },
  ],
};
