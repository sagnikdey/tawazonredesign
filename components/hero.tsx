import React from 'react'
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck, Dot, DotIcon, CheckCircle, CircleDot } from 'lucide-react';

const hero = () => {
  return (
    <>
    <div className="relative flex min-h-screen w-full flex-col overflow-hidden bg-[#f8fafc] pt-20 pb-16 justify-end dark:bg-[#0a0a0a] lg:pb-24">
        {/* Top Fade Grid Background - Light mode */}
        <div
          className="absolute inset-0 z-0 dark:hidden"
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
          className="absolute inset-0 z-0 hidden dark:block"
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
                    <p className="max-w-xl text-xl leading-relaxed">
                        We operate across Middle East, Africa, South Asia, India &amp; North America.
                    </p>
                </div>
            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default hero