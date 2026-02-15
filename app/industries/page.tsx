import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

export default function IndustriesPage() {
  const industries = [
    {
      name: 'Coatings',
      description: 'Tawazon Coatings Division supplies raw materials for paints and coatings, offering resins, pigments, additives, and solvents for industrial and decorative applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:pill-linear',
      link: '/industries/coatings'
    },
    {
      name: 'Inks',
      description: 'Tawazon Inks Division supplies high-performance pigments and vehicles for printing and packaging, offering a wide range of colors and formulations for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:plant-2-linear',
      link: '/industries/inks'
    },
    {
      name: 'Construction Chemicals',
      description: 'Tawazon Construction Chemicals Division supplies specialty chemicals for construction, offering admixtures, waterproofing, and repair solutions for modern infrastructure. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:factory-linear',
      link: '/industries/construction-chemicals'
    },
    {
      name: 'Plastics',
      description: 'Tawazon Plastics Division supplies masterbatches and polymers for injection and extrusion molding, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:cup-linear',
      link: '/industries/plastics'
    },
    {
      name: 'Packaging',
      description: 'Tawazon Packaging Division supplies sustainable materials for rigid and flexible packaging solutions, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:shirt-linear',
      link: '/industries/packaging'
    },
    {
      name: 'Fiberglass',
      description: 'Tawazon Fiberglass Division supplies raw materials for composites and reinforcement applications, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:oil-linear',
      link: '/industries/fiberglass'
    },
    {
      name: 'Rubber',
      description: 'Tawazon Rubber Division supplies synthetic rubbers and chemicals for automotive and industrial use, offering a wide range of materials for various applications. Backed by global suppliers and technical expertise, it delivers innovative and cost-effective solutions.',
      icon: 'solar:rubber-linear',
      link: '/industries/rubber'
    },
    {
      name: 'Food Additives',
      description: 'Tawazon Food Division supplies specialty ingredients and additives for the food industry, including sugar-reduction solutions, fiber enhancers, encapsulated vitamin premixes, and nutraceuticals. With a focus on quality and compliance, it ensures innovative and functional solutions for food manufacturers.',
      icon: 'solar:food-linear',
      link: '/industries/food-additives'
    }
  ];

  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      
      <section className="sm:py-32 dark:bg-[#030303] bg-white pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Industries Served</span>
              </div>
              <h1 className="dark:text-white md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight">
                Innovative solutions for a sustainable tomorrow
              </h1>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                Tawazon actively develops and supplies innovative, eco-friendly chemical solutions that support sustainability across diverse industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="glass-card group relative overflow-hidden border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                  <Icon icon={industry.icon} width="20" strokeWidth="1.5" />
                </div>
                <h2 className="text-xl font-medium text-zinc-900 dark:text-white mb-2">
                  {industry.name}
                </h2>
                <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {industry.description}
                </p>
                <div className='pt-4'>
                  <Button variant="outline" className=" group-hover:bg-accent group-hover:text-white group-hover:border-accent" asChild>
                    <Link href={industry.link}>Read More</Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
