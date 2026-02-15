import type { IndustryConfig } from './industries-types';

export const CONSTRUCTION_CHEMICALS_CONFIG: IndustryConfig = {
  slug: 'construction-chemicals',
  name: 'Construction Chemicals',
  breadcrumb: 'Construction Chemicals',
  directViewProducts: true,
  intro:
    'Tawazon Construction Division supplies specialty chemicals and raw materials for construction, including adhesives, sealants, additives, and resins. With global partnerships and technical expertise, it delivers high-performance and sustainable solutions.',
  overview:
    'Tawazon Construction Chemicals Division supplies specialty chemicals for construction, offering admixtures, waterproofing, and repair solutions for modern infrastructure. Our products support concrete, mortar, and building envelope applications.',
  categories: [
    {
      id: 'binder',
      title: 'Binder',
      description:
        'Polymer binders for construction adhesives, mortars, and coatings.',
      products: [
        {
          name: 'Construction Binder CB-100',
          description:
            'Redispersible polymer powder for cementitious tile adhesives and renders.',
        },
        {
          name: 'Construction Binder CB-200',
          description:
            'Acrylic emulsion for waterproofing membranes and coatings.',
        },
      ],
    },
    {
      id: 'pigments',
      title: 'Pigments',
      description:
        'Color pigments for concrete, mortar, and architectural coatings.',
      products: [
        {
          name: 'Iron Oxide Red',
          description:
            'Synthetic iron oxide for consistent coloring of concrete and paving.',
        },
        {
          name: 'Iron Oxide Yellow',
          description:
            'Yellow iron oxide for architectural concrete and terrazzo.',
        },
      ],
    },
    {
      id: 'additives',
      title: 'Additives',
      description:
        'Admixtures for concrete and mortar including plasticizers and accelerators.',
      products: [
        {
          name: 'Superplasticizer SP-100',
          description:
            'Polycarboxylate-based superplasticizer for high-strength concrete.',
        },
        {
          name: 'Accelerator AC-200',
          description:
            'Calcium nitrate-based accelerator for cold weather concreting.',
        },
      ],
    },
    {
      id: 'miscellaneous',
      title: 'Miscellaneous',
      description:
        'Specialty construction chemicals including curing compounds and release agents.',
      products: [
        {
          name: 'Curing Compound CC-100',
          description:
            'Membrane-forming compound for concrete curing and moisture retention.',
        },
        {
          name: 'Release Agent RA-200',
          description:
            'Form release agent for precast concrete and formwork.',
        },
      ],
    },
  ],
};
