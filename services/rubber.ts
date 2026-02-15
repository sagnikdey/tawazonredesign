import type { IndustryConfig } from './industries-types';

export const RUBBER_CONFIG: IndustryConfig = {
  slug: 'rubber',
  name: 'Rubber',
  breadcrumb: 'Rubber',
  directViewProducts: true,
  intro:
    'Tawazon Rubber Division supplies specialty chemicals and raw materials for the rubber industry, including processing aids, accelerators, and additives. Catering to diverse applications, it ensures high-performance and durable solutions for rubber product manufacturers.',
  overview:
    'Tawazon Rubber Division supplies processing aids, accelerators, and specialty additives for natural and synthetic rubber compounding. We serve tire, industrial, and specialty rubber manufacturers.',
  categories: [
    {
      id: 'additives',
      title: 'Additives',
      description:
        'Processing aids and functional additives for rubber compounding.',
      products: [
        {
          name: 'Processing Aid PA-100',
          description:
            'Fatty acid ester for improved flow and dispersion in rubber compounds.',
        },
        {
          name: 'Antioxidant AO-200',
          description:
            'Antioxidant for heat and oxygen resistance in rubber products.',
        },
      ],
    },
    {
      id: 'pigments',
      title: 'Pigments',
      description:
        'Color pigments for rubber products including tires and industrial goods.',
      products: [
        {
          name: 'Iron Oxide Pigment IO-100',
          description:
            'Red iron oxide for coloring rubber compounds.',
        },
        {
          name: 'Carbon Black CB-200',
          description:
            'Reinforcing carbon black for tire and industrial rubber.',
        },
      ],
    },
    {
      id: 'specialty-minerals',
      title: 'Specialty Minerals',
      description:
        'Mineral fillers and extenders for rubber compounding.',
      products: [
        {
          name: 'Precipitated Silica PS-100',
          description:
            'Precipitated silica for low rolling resistance tire treads.',
        },
        {
          name: 'Clay Filler CF-200',
          description:
            'Kaolin clay for cost-effective reinforcement in rubber.',
        },
      ],
    },
    {
      id: 'waxes-processing-aids',
      title: 'Waxes & Processing Aids',
      description:
        'Waxes and lubricants for rubber processing and surface protection.',
      products: [
        {
          name: 'Paraffin Wax PW-100',
          description:
            'Paraffin wax for bloom and ozone protection in rubber.',
        },
        {
          name: 'Stearic Acid SA-200',
          description:
            'Stearic acid for activation and processing in rubber compounds.',
        },
      ],
    },
    {
      id: 'ultramarine-pigments',
      title: 'Ultramarine Pigments',
      description:
        'Ultramarine blue and violet pigments for rubber coloring.',
      products: [
        {
          name: 'Ultramarine Blue UB-100',
          description:
            'Ultramarine blue for coloring rubber and plastic compounds.',
        },
      ],
    },
  ],
};
