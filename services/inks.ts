import type { IndustryConfig } from './industries-types';

export const INKS_CONFIG: IndustryConfig = {
  slug: 'inks',
  name: 'Inks',
  breadcrumb: 'Inks',
  directViewProducts: true,
  intro:
    'Tawazon Inks Division supplies high-quality raw materials for printing inks, including pigments, resins, additives, and solvents. Backed by global suppliers and technical expertise, it ensures innovative and reliable solutions for the industry.',
  overview:
    'Tawazon Inks Division supplies high-performance pigments and vehicles for printing and packaging, offering a wide range of colors and formulations for various applications. With expertise in flexographic, gravure, and offset inks, we serve the packaging and commercial printing sectors.',
  categories: [
    {
      id: 'binders',
      title: 'Binders',
      description:
        'Resin binders for ink formulations providing adhesion, gloss, and durability for various printing applications.',
      products: [
        {
          name: 'Ink Binder IB-100',
          description:
            'Nitrocellulose-based binder for flexographic and gravure inks with excellent pigment wetting and gloss.',
        },
        {
          name: 'Ink Binder IB-200',
          description:
            'Polyurethane dispersion for water-based inks with superior adhesion to flexible substrates.',
        },
        {
          name: 'Ink Binder IB-300',
          description:
            'Acrylic resin for UV-curable inks offering fast cure and chemical resistance.',
        },
      ],
    },
    {
      id: 'pigments',
      title: 'Pigments',
      description:
        'High-performance pigments for vibrant colors and consistent quality in printing ink formulations.',
      products: [
        {
          name: 'Organic Pigment OP-100',
          description:
            'Phthalocyanine blue for process blue in four-color printing with excellent lightfastness.',
        },
        {
          name: 'Organic Pigment OP-200',
          description:
            'Diarylide yellow for packaging inks with good heat stability.',
        },
        {
          name: 'Inorganic Pigment IP-100',
          description:
            'Titanium dioxide for opacity and brightness in white inks.',
        },
      ],
    },
    {
      id: 'additives',
      title: 'Additives',
      description:
        'Specialty additives for ink performance including defoamers, waxes, and flow modifiers.',
      products: [
        {
          name: 'Defoamer DF-100',
          description:
            'Silicone-free defoamer for water-based inks to prevent foam in high-speed printing.',
        },
        {
          name: 'Wax Additive WX-200',
          description:
            'Polyethylene wax for rub and scratch resistance in flexible packaging inks.',
        },
        {
          name: 'Flow Modifier FM-300',
          description:
            'Rheology modifier for consistent viscosity and print quality.',
        },
      ],
    },
  ],
};
