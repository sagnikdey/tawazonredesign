export interface Industry {
  id: string;
  name: string;
  description: string;
  icon: string;
  link: string;
}

export const industries: Industry[] = [
  {
    id: 'coatings',
    name: 'Coatings',
    description:
      'Tawazon Coatings Division supplies raw materials for paints and coatings, offering resins, pigments, additives, and solvents for industrial and decorative applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:pill-linear',
    link: '/industries/coatings',
  },
  {
    id: 'inks',
    name: 'Inks',
    description:
      'Tawazon Inks Division supplies high-performance pigments and vehicles for printing and packaging, offering a wide range of colors and formulations for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:plant-2-linear',
    link: '/industries/inks',
  },
  {
    id: 'construction-chemicals',
    name: 'Construction Chemicals',
    description:
      'Tawazon Construction Chemicals Division supplies specialty chemicals for construction, offering admixtures, waterproofing, and repair solutions for modern infrastructure. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:factory-linear',
    link: '/industries/construction-chemicals',
  },
  {
    id: 'plastics',
    name: 'Plastics',
    description:
      'Tawazon Plastics Division supplies masterbatches and polymers for injection and extrusion molding, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:cup-linear',
    link: '/industries/plastics',
  },
  {
    id: 'packaging',
    name: 'Packaging',
    description:
      'Tawazon Packaging Division supplies sustainable materials for rigid and flexible packaging solutions, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:shirt-linear',
    link: '/industries/packaging',
  },
  {
    id: 'fiberglass',
    name: 'Fiberglass',
    description:
      'Tawazon Fiberglass Division supplies raw materials for composites and reinforcement applications, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:oil-linear',
    link: '/industries/fiberglass',
  },
  {
    id: 'rubber',
    name: 'Rubber',
    description:
      'Tawazon Rubber Division supplies synthetic rubbers and chemicals for automotive and industrial use, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
    icon: 'solar:rubber-linear',
    link: '/industries/rubber',
  },
  {
    id: 'food-additives',
    name: 'Food Additives',
    description:
      'Tawazon Food Division supplies specialty ingredients and additives for the food industry, including sugar-reduction solutions, fiber enhancers, encapsulated vitamin premixes, and nutraceuticals. With a focus on quality and compliance, it ensures innovative and functional solutions for food manufacturers.',
    icon: 'solar:food-linear',
    link: '/industries/food-additives',
  },
];
