import React from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { locations } from '@/services/locations';

/** Equirectangular projection: convert lat/lng to % for map overlay */
function toMapPercent(lat: number, lng: number) {
  return {
    left: ((lng + 180) / 360) * 100,
    top: ((90 - lat) / 180) * 100,
  };
}

const hero = () => {
  const officeMarkers = locations.filter((loc) => loc.lat != null && loc.lng != null);

  return (
    <>
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#f8fafc] pt-20 pb-16 justify-end dark:bg-[#0a0a0a] lg:pb-24">
        {/* Map + dots container: 80% size, centered, responsive */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="relative w-[80%] h-[80%] min-w-[200px] min-h-[120px] max-w-full max-h-full">
            {/* World map background */}
            <div
              className="absolute inset-0 z-0 dark:invert"
              style={{
                backgroundImage: "url(/assets/images/world-maap.png)",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Office location dots - positioned relative to map container */}
            {/* {officeMarkers.map((loc) => {
              const { left, top } = toMapPercent(loc.lat!, loc.lng!);
              return (
                <div
                  key={loc.id}
                  className="absolute w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] dark:shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                  style={{ left: `${left}%`, top: `${top}%`, transform: 'translate(-50%, -50%)' }}
                  title={`${loc.city}, ${loc.country}`}
                />
              );
            })} */}
          </div>
        </div>
        {/* Top Fade Grid Background - Light mode */}
        <div
          className="absolute inset-0 z-1 dark:hidden"
          style={{
            backgroundImage: `
              linear-gradient(to right, #e2e8f0 1px, transparent 1px),
              linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)
            `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        {/* Top Fade Grid Background - Dark mode: lighter & thinner like light mode */}
        <div
          className="absolute inset-0 z-2 hidden dark:block"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(226, 232, 240, 0.12) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.12) 1px, transparent 1px)
            `,
            backgroundSize: "20px 30px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)",
          }}
        />
        <div className="relative z-10 sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">

        {/* Content Area: Bottom Left */}
        <div className="relative">
            <div>
                {/* Badge */}
                <Badge variant="outline">
                    <CircleDot data-icon="CircleDot" className='text-green-500'/>
                    Tawazon Chemicals
                </Badge>

                {/* Headline with Gradient */}
                <h1 className="dark:text-white sm:text-4xl md:text-4xl lg:text-5xl text-4xl font-semibold pt-8">
                    We're a specialty chemical distributor 
                    <span className="bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent pb-4 dark:from-indigo-400 dark:via-purple-400 dark:to-pink-400"> connecting leading manufacturers with industries.</span>
                </h1>

                {/* Subheadline & CTAs */}
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