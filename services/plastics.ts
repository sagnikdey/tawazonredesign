import type { IndustryConfig } from './industries-types';

export const PLASTICS_CONFIG: IndustryConfig = {
  slug: 'plastics',
  name: 'Plastics',
  breadcrumb: 'Plastics',
  directViewProducts: true,
  intro:
    'Tawazon Plastics Division supplies high-quality polymers and additives for plastic manufacturing, covering stabilizers, fillers, colorants, and performance enhancers. Committed to efficiency and sustainability, it helps businesses optimize product performance.',
  overview:
    'Tawazon Plastics Division supplies masterbatches and polymers for injection and extrusion molding, offering a wide range of materials for various applications. We serve automotive, packaging, and industrial sectors.',
  categories: [
    {
      id: 'pvc',
      title: 'PVC',
      description:
        'PVC compounds, stabilizers, and additives for rigid and flexible applications.',
      products: [
        {
          name: 'PVC Stabilizer ST-100',
          description:
            'Calcium-zinc stabilizer for flexible PVC applications.',
        },
        {
          name: 'PVC Lubricant LB-200',
          description:
            'Internal lubricant for improved extrusion and processing.',
        },
      ],
    },
    {
      id: 'pet-pc-engg-polymers',
      title: 'Pet / PC and Engg Polymers',
      description:
        'Engineering polymers including PET, PC, and specialty compounds.',
      products: [
        {
          name: 'PET Compound PC-100',
          description:
            'Reinforced PET for engineering applications requiring strength and heat resistance.',
        },
        {
          name: 'PC Blend PB-200',
          description:
            'Polycarbonate blend for impact-resistant automotive and packaging.',
        },
      ],
    },
    {
      id: 'polyolefin-compounds',
      title: 'Polyolefin and Compounds',
      description:
        'PP, PE compounds and additives for injection molding and extrusion.',
      products: [
        {
          name: 'PP Compound PP-100',
          description:
            'Talc-filled polypropylene for automotive and appliance applications.',
        },
        {
          name: 'PE Compound PE-200',
          description:
            'HDPE compound for blow molding and packaging.',
        },
      ],
    },
    {
      id: 'masterbatch',
      title: 'Masterbatch',
      description:
        'Color and additive masterbatches for various polymer systems.',
      products: [
        {
          name: 'Color Masterbatch CM-100',
          description:
            'Universal color masterbatch for PE and PP applications.',
        },
        {
          name: 'Additive Masterbatch AM-200',
          description:
            'Antioxidant and UV stabilizer masterbatch for outdoor applications.',
        },
      ],
    },
    {
      id: 'dosing-unit',
      title: 'Dosing Unit',
      description:
        'Liquid dosing systems and additives for precision metering.',
      products: [
        {
          name: 'Liquid Dosing System LD-100',
          description:
            'Precision dosing unit for liquid additives in extrusion.',
        },
      ],
    },
  ],
};
