import React from 'react';
import Link from 'next/link';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import { industries } from '@/services/industries';
import { PageHeader } from '@/components/page-header';

export default async function IndustriesPage() {
  return (
    <div className="bg-canvas min-h-screen items-center justify-center font-sans">
      <Navigation />

      <section className="bg-section-alt sm:py-32 pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <PageHeader slug="industries">
                <p className="mt-4">
                  Tawazon actively develops and supplies innovative, eco-friendly chemical solutions that
                  support sustainability across diverse industries.
                </p>
              </PageHeader>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="glass-card group relative overflow-hidden "
              >
                <div className="icon-box">
                  <Icon icon={industry.icon} width="20" strokeWidth="1.5" />
                </div>
                <h2 className="text-foreground mb-2 text-xl font-medium">
                  {industry.name}
                </h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {industry.description}
                </p>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="group-hover:bg-accent group-hover:border-accent group-hover:text-accent-foreground"
                    asChild
                  >
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
