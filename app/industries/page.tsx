import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { industries } from '@/services/industries';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';

export default function IndustriesPage() {

  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      
      <section className="sm:py-32 dark:bg-[#030303] bg-white pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
            <Badge variant="outline" className='mb-8'>
                <CircleDot data-icon="CircleDot" className='text-green-500'/>
                        Industries Served
              </Badge>
              <h1>Innovative solutions for a sustainable tomorrow </h1>
              <p className="mt-4">
                Tawazon actively develops and supplies innovative, eco-friendly chemical solutions that support sustainability across diverse industries.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="glass-card group relative overflow-hidden "
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
