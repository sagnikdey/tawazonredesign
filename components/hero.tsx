import React from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';
import { Button } from '@/components/ui/button';

const hero = () => {
  return (
    <>
    <div className="hero-surface relative flex min-h-screen w-full flex-col justify-end overflow-hidden pt-20 pb-16 lg:pb-24">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative h-[80%] w-[80%] min-h-[120px] min-w-[200px] max-h-full max-w-full">
            <div
              className="hero-map hero-map-invert absolute inset-0 z-0"
              style={{
                backgroundImage: "url(/assets/images/world-maap.png)",
              }}
            />
          </div>
        </div>
        <div className="hero-grid pointer-events-none absolute inset-0 z-1 opacity-100" aria-hidden />
        <div className="relative z-10 mx-auto mr-auto ml-auto max-w-[1400px] pr-6 pl-6 sm:px-12 xl:px-24">

        <div className="relative">
            <div>
                <Badge variant="outline">
                    <CircleDot data-icon="CircleDot" className="text-brand-accent"/>
                    Tawazon Chemicals
                </Badge>

                <h1 className="text-foreground sm:text-4xl md:text-4xl lg:text-5xl pt-8 text-4xl font-semibold">
                    We&apos;re a specialty chemical distributor 
                    <span className="text-gradient-hero"> connecting leading manufacturers with industries.</span>
                </h1>

                <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                    <h3 className="max-w-3xl">
                        We operate across Middle East, Africa, South Asia, India &amp; North America.
                    </h3>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button variant="default" size="lg" asChild>
                    <Link href="/industries">Explore Industries
                    <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon></Link>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link href="/locations">Contact Regional Team</Link>
                  </Button>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default hero
