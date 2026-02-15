export interface IndustryProduct {
  name: string;
  description: string;
}

export interface IndustryCategory {
  id: string;
  title: string;
  description: string;
  products: IndustryProduct[];
  /** For coatings-style: subcategories with their own products. If set, products are ignored. */
  subcategories?: IndustryCategory[];
}

export interface IndustryOtherCard {
  name: string;
  description: string;
  icon: string;
  link: string;
}

export interface IndustryConfig {
  slug: string;
  name: string;
  breadcrumb: string;
  intro: string;
  overview: string;
  categories: IndustryCategory[];
  /** Override for "other" cards (e.g. Coatings links to Inks, Construction, Plastics). If omitted, remaining categories are expandable. */
  otherCards?: IndustryOtherCard[];
  /** When true, show "View Products" directly on category cards (no expand step). Use for industries where categories have no subcategories. */
  directViewProducts?: boolean;
}
