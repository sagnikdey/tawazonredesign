import React from 'react'
import { Icon } from '@iconify/react';
import { Badge } from '@/components/ui/badge';
import { CircleDot, ListCheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const about = () => {
  return (
    <>
    <section className="bg-muteddark" id="about">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
            
            <div className="mb-8 md:flex md:items-end md:justify-between">
                
                <div className="max-w-xl">
                    <Badge variant="outline">
                        <CircleDot data-icon="CircleDot" className='text-green-500'/>
                        Who we are
                    </Badge>
                    <h2 className="pt-8">Empowering industries with quality &amp; innovation</h2>
                    <p className="mt-4 text-muted-foreground">We bridge the gap between global manufacturers and local industries ensuring a seamless supply of high-quality raw
                    materials.</p>
                </div>
                <div className="mt-6 md:mt-0">
                    <Button variant="outline" asChild>
                        <Link href="/about-us">
                            Read full story
                            <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon>
                        </Link>
                    </Button>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                
                {/* Card 1: Main Focus (Large) */}
                <div className="glass-card group relative overflow-hidden md:col-span-2 md:row-span-2">
                    {/* <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div> */}
                    
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                                <Icon icon="solar:atom-linear" width="20" strokeWidth="1.5" className=""></Icon>
                            </div>
                            <h3 className="pb-4">Global Reach, Local Expertise</h3>
                            <p className="mb-6 max-w-xl leading-relaxed">
                            With a global footprint spanning over eight offices and expertise across eight specialized business verticals, Tawazon’s
                            team of more than 165 skilled professionals works collaboratively to provide tailored solutions that empower customers
                            and drive progress across a wide range of focused industries.
                            </p>
                        </div>
                        
                        <div className="grid gap-2 lg:gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
                            {/* Stat 1 */}
                            <div className='glass-card-textured p-8'>
                                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">30+</p>
                                <p className="mt-1">Years of experience</p>
                            </div>
                            {/* Stat 2 */}
                            <div className='glass-card-textured p-8'>
                                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">1800+</p>
                                <p className="mt-1">Satisfied clients</p>
                            </div>
                        
                            {/* Stat 3 */}
                            <div className='glass-card-textured p-8'>
                                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">51</p>
                                <p className="mt-1">Countries</p>                             
                            </div>
                        </div>
                    </div>
                </div>

                {/* Card 2: Minimalist */}
                <div className="glass-card group relative overflow-hidden  md:row-span-2">
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                                <Icon icon="solar:soundwave-circle-linear" width="20" strokeWidth="1.5"></Icon>
                            </div>
                            <h3>Responsible Business Partner</h3>
                            <p className="py-4 leading-relaxed text-sm">
                                Tawazon Chemical Co. LLC upholds responsible business practices, integrating sustainability, compliance, and corporate
                                responsibility.
                            </p>
                        </div>
                        <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mt-0.5">
                                <ListCheckIcon className="text-green-600" width="16" height="16" />
                            </div>
                            <div>
                                <h5 className="font-semibold">ISO 9001:2015</h5>
                                <p className="text-sm mt-1">Quality Management</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mt-0.5">
                                <ListCheckIcon className="text-green-600" width="16" height="16" />
                            </div>
                            <div>
                                <h5 className="font-semibold">ISO 14001:2015</h5>
                                <p className="text-sm mt-1">Environment Management</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                        <div className="shrink-0 w-8 h-8 rounded-full border flex items-center justify-center mt-0.5">
                                <ListCheckIcon className="text-green-600" width="16" height="16" />
                            </div>
                            <div>
                                <h5 className="font-semibold">ISO 45001:2018</h5>
                                <p className="text-sm mt-1">Occupational Health &amp; Safety Management</p>
                            </div>
                        </div>
                        <Separator />
                        <p className="text-sm mt-1">Fully compliant with Zakat and corporate tax regulations, Tawazon ensures ethical financial practices.</p>
                        </div>
                    </div>

            </div>
            
            {/* Bottom Statement */}
            
        </div>
    </div>
    </section>
    </>
  )
}

export default about