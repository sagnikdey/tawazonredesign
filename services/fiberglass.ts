import type { IndustryConfig } from './industries-types';

export const FIBERGLASS_CONFIG: IndustryConfig = {
  slug: 'fiberglass',
  name: 'Fiberglass',
  breadcrumb: 'Fiberglass',
  directViewProducts: true,
  intro:
    'Tawazon Fiberglass Division provides high-performance raw materials for fiberglass applications, including general-purpose resins, glass reinforcements, additives, cleaning agents, and release agents. Supporting industries like artificial marble, kitchen slabs, and boat manufacturing, it ensures durability and efficiency in production.',
  overview:
    'Tawazon Fiberglass Division supplies resins, reinforcements, and process chemicals for composite manufacturing. We serve industries including marine, construction, and industrial applications with high-performance materials.',
  categories: [
    {
      id: 'tools-equipment',
      title: 'Tools & Equipment',
      description:
        'Specialty tools and equipment for fiberglass and composite fabrication.',
      products: [
        {
          name: 'Spray Gun SG-100',
          description:
            'Chopped strand spray gun for open mold applications.',
        },
        {
          name: 'Roller Set RS-200',
          description:
            'Laminating rollers for wet-out and air removal in hand lay-up.',
        },
      ],
    },
    {
      id: 'releasing-agents',
      title: 'Releasing Agents',
      description:
        'Mold release agents for easy demolding and surface finish.',
      products: [
        {
          name: 'PVA Release Agent RA-100',
          description:
            'Polyvinyl alcohol release film for gel coat and laminate molds.',
        },
        {
          name: 'Wax Release WR-200',
          description:
            'Paste wax mold release for multiple releases without reapplication.',
        },
      ],
    },
    {
      id: 'cleaning-agents',
      title: 'Cleaning Agents',
      description:
        'Cleaning and maintenance products for molds and equipment.',
      products: [
        {
          name: 'Mold Cleaner MC-100',
          description:
            'Solvent-based mold cleaner for gel coat and resin buildup.',
        },
        {
          name: 'Equipment Cleaner EC-200',
          description:
            'Equipment cleaner for spray guns and mixing equipment.',
        },
      ],
    },
    {
      id: 'gp-resins-gelcoat',
      title: 'GP Resins / Gelcoat',
      description:
        'General-purpose polyester resins and gel coats for composite applications.',
      products: [
        {
          name: 'GP Resin GR-100',
          description:
            'Orthophthalic polyester resin for general-purpose laminating.',
        },
        {
          name: 'Gel Coat GC-200',
          description:
            'Pigmented gel coat for marine and architectural applications.',
        },
      ],
    },
    {
      id: 'glass-reinforcements',
      title: 'Glass Reinforcements',
      description:
        'Glass fiber reinforcements including chopped strand and woven roving.',
      products: [
        {
          name: 'Chopped Strand CS-100',
          description:
            'E-glass chopped strand mat for hand lay-up and spray-up.',
        },
        {
          name: 'Woven Roving WR-200',
          description:
            'Woven roving for high-strength structural laminates.',
        },
      ],
    },
  ],
};
