/**
 * Supplier data for the Suppliers page.
 * Add PNG logos (transparent background) to /public/suppliers/
 * Logo filenames should match the `logo` field (e.g. arkema.png)
 */

export interface Supplier {
  name: string;
  logo: string;
  url: string;
}

export interface SupplierCategory {
  id: string;
  title: string;
  suppliers: Supplier[];
}

export const SUPPLIERS_INTRO = {
  badge: 'For Suppliers',
  heading: 'Nurturing Relationships',
  title: 'Suppliers',
  description:
    "Tawazon's robust network of suppliers provides customers with unparalleled access to the widest range of industrial chemicals in the region. We prioritize open and effective collaboration with our partners and actively seek new, non-conflicting alliances to enhance our portfolio and deliver mutual value.",
  subDescription:
    'With strong market positions across regions, our teams leverage Tawazon\'s scale to negotiate competitive pricing, ensuring cost advantages for our customers.',
};

export const SUPPLIERS_BUILDING_CONNECTIONS = {
  title: 'Building connections',
  description:
    'By partnering with Tawazon, customers can order precisely what they need, avoiding the necessity of bulk purchases. This flexibility reduces storage requirements and optimizes production costs. For suppliers, Tawazon offers access to a diverse customer base, ranging from large enterprises to smaller businesses, through our highly robust and penetrative distribution network. This creates significant opportunities to expand market reach and cater to a variety of customer needs. Our streamlined supply chain ensures just-in-time deliveries, guaranteeing uninterrupted operations and minimizing downtime caused by stock shortages, creating value for both customers and suppliers.',
};

export const SUPPLIER_CATEGORIES: SupplierCategory[] = [
  {
    id: 'coatings-construction-inks',
    title: 'Coatings, Construction and Inks',
    suppliers: [
      { name: 'India', logo: '/suppliers/india.png', url: 'https://example.com' },
      { name: 'Belgium', logo: '/suppliers/belgium.png', url: 'https://example.com' },
      { name: 'Japan', logo: '/suppliers/japan.png', url: 'https://example.com' },
      { name: 'Austria', logo: '/suppliers/austria.png', url: 'https://example.com' },
      { name: 'USA', logo: '/suppliers/usa.png', url: 'https://example.com' },
      { name: 'Germany', logo: '/suppliers/germany.png', url: 'https://example.com' },
      { name: 'UK', logo: '/suppliers/uk.png', url: 'https://example.com' },
      { name: 'Korea', logo: '/suppliers/korea.png', url: 'https://example.com' },
      { name: 'Italy', logo: '/suppliers/italy.png', url: 'https://example.com' },
      { name: 'Netherlands', logo: '/suppliers/netherlands.png', url: 'https://example.com' },
      { name: 'Saudi Arabia', logo: '/suppliers/saudi-arabia.png', url: 'https://example.com' },
    ],
  },
  {
    id: 'packaging',
    title: 'Packaging',
    suppliers: [
      { name: 'India & Spain', logo: '/suppliers/india-spain.png', url: 'https://example.com' },
      { name: 'Japan', logo: '/suppliers/japan.png', url: 'https://example.com' },
      { name: 'USA & UK', logo: '/suppliers/usa-uk.png', url: 'https://example.com' },
      { name: 'UAE', logo: '/suppliers/uae.png', url: 'https://example.com' },
    ],
  },
  {
    id: 'plastics',
    title: 'Plastics',
    suppliers: [
      { name: 'Turkey', logo: '/suppliers/turkey.png', url: 'https://example.com' },
      { name: 'USA', logo: '/suppliers/usa.png', url: 'https://example.com' },
      { name: 'India', logo: '/suppliers/india.png', url: 'https://example.com' },
      { name: 'Netherlands', logo: '/suppliers/netherlands.png', url: 'https://example.com' },
      { name: 'France', logo: '/suppliers/france.png', url: 'https://example.com' },
      { name: 'Greece', logo: '/suppliers/greece.png', url: 'https://example.com' },
      { name: 'Switzerland', logo: '/suppliers/switzerland.png', url: 'https://example.com' },
      { name: 'Brunei', logo: '/suppliers/brunei.png', url: 'https://example.com' },
      { name: 'Italy', logo: '/suppliers/italy.png', url: 'https://example.com' },
      { name: 'Belgium', logo: '/suppliers/belgium.png', url: 'https://example.com' },
      { name: 'Arkema', logo: '/suppliers/arkema.png', url: 'https://www.arkema.com' },
      { name: 'Germany', logo: '/suppliers/germany.png', url: 'https://example.com' },
    ],
  },
  {
    id: 'food',
    title: 'Food',
    suppliers: [
      { name: 'UK', logo: '/suppliers/uk.png', url: 'https://example.com' },
      { name: 'Spain', logo: '/suppliers/spain.png', url: 'https://example.com' },
      { name: 'India', logo: '/suppliers/india.png', url: 'https://example.com' },
    ],
  },
];
