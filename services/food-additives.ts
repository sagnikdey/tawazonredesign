import type { IndustryConfig } from './industries-types';

export const FOOD_ADDITIVES_CONFIG: IndustryConfig = {
  slug: 'food-additives',
  name: 'Food Additives',
  breadcrumb: 'Food Additives',
  intro:
    'Tawazon Food Division supplies specialty ingredients and additives for the food industry, including sugar-reduction solutions, fiber enhancers, encapsulated vitamin premixes, and nutraceuticals. With a focus on quality and compliance, it ensures innovative and functional solutions for food manufacturers.',
  overview:
    'Tawazon Food Division supplies functional ingredients for food and beverage applications. Our portfolio includes sugar alternatives, fiber, vitamins, and specialty ingredients for health-focused formulations.',
  directViewProducts: true,
  categories: [
    {
      id: 'botanicals',
      title: 'Botanicals',
      description:
        'Plant-based extracts and botanical ingredients for functional foods.',
      products: [
        {
          name: 'Turmeric Extract TE-100',
          description:
            'Standardized curcumin extract for coloring and functional applications.',
        },
        {
          name: 'Green Tea Extract GT-200',
          description:
            'Polyphenol-rich green tea extract for beverages and supplements.',
        },
      ],
    },
    {
      id: 'koda-potassium-bicarbonate',
      title: 'Koda™ Potassium Bicarbonate',
      description:
        'Koda™ potassium bicarbonate for reduced-sodium and pH control applications.',
      products: [
        {
          name: 'Koda™ Potassium Bicarbonate',
          description:
            'Food-grade potassium bicarbonate for leavening and pH adjustment in baked goods and beverages.',
        },
      ],
    },
    {
      id: 'nutraceuticals',
      title: 'Nutraceuticals',
      description:
        'Functional ingredients for fortified and health-focused products.',
      products: [
        {
          name: 'Omega-3 Concentrate OM-100',
          description:
            'Encapsulated omega-3 for fortification of foods and beverages.',
        },
        {
          name: 'Probiotic Blend PB-200',
          description:
            'Stable probiotic blend for dairy and non-dairy applications.',
        },
      ],
    },
    {
      id: 'pell-low-sodium-baking-powder',
      title: 'Pell™ Low Sodium Baking Powder Range',
      description:
        'Pell™ low sodium baking powder for reduced-sodium baked goods.',
      products: [
        {
          name: 'Pell™ Low Sodium Baking Powder',
          description:
            'Reduced-sodium leavening system for baked goods with lower sodium content.',
        },
      ],
    },
    {
      id: 'vitamins-vitamin-blends',
      title: 'Vitamins & Vitamin Blends',
      description:
        'Encapsulated vitamins and premixes for food fortification.',
      products: [
        {
          name: 'Vitamin D Premix VD-100',
          description:
            'Encapsulated vitamin D3 for dairy and beverage fortification.',
        },
        {
          name: 'B-Vitamin Blend BV-200',
          description:
            'Multivitamin premix for bakery and cereal applications.',
        },
      ],
    },
  ],
};
