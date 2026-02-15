import React from 'react'
import { Icon } from '@iconify/react';
import { Badge } from './ui/badge';
import { CircleDot } from 'lucide-react';

const about = () => {
  return (
    <>
    <section className="sm:py-32 bg-muteddark" id="about">
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
                    <a href="about-us" className="group flex items-center gap-2 text-sm text-zinc-900 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300">
                        Read full story
                        <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-6">
                
                {/* Card 1: Main Focus (Large) */}
                <div className="glass-card group relative overflow-hidden border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:col-span-2 md:row-span-2">
                    <div className="absolute right-0 top-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]"></div>
                    
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <div className="">
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                                <Icon icon="solar:atom-linear" width="20" strokeWidth="1.5" className=""></Icon>
                            </div>
                            <h3 className="text-xl font-medium text-zinc-900 dark:text-white pb-4">Global Reach, Local Expertise</h3>
                            <p className="mb-6 max-w-lg text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                            With a global footprint spanning over eight offices and expertise across eight specialized business verticals, Tawazon’s
                            team of more than 165 skilled professionals works collaboratively to provide tailored solutions that empower customers
                            and drive progress across a wide range of focused industries.
                            </p>
                        </div>
                        
                        <div className="grid gap-2 lg:gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(0,1fr)]">
                            {/* Stat 1 */}
                            <article className="px-6 py-7 sm:py-9 shadow-sm border bg-muted flex flex-col justify-between">
                                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">30+</p>
                                <p className="mt-1">Years of experience</p>
                            </article>
                            {/* Stat 2 */}
                            <article className="px-6 py-7 sm:px-7 sm:py-8 border flex flex-col justify-between">
                                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">1800+</p>
                                <p className="mt-1">Satisfied clients</p>
                            </article>
                        
                            {/* Stat 3 */}
                            <article className="px-6 py-7 sm:px-7 sm:py-8 border flex flex-col justify-between">
                                <p className="text-4xl sm:text-5xl font-semibold tracking-tight">51</p>
                                <p className="mt-1">Countries</p>                             
                            </article>
                        </div>
                    </div>
                </div>

                {/* Card 2: Minimalist */}
                <div className="glass-card group relative overflow-hidden border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 md:row-span-2">
                    <div className="relative z-10 flex h-full flex-col justify-between">
                        <div>
                            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                                <Icon icon="solar:soundwave-circle-linear" width="20" strokeWidth="1.5"></Icon>
                            </div>
                            <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Responsible Business Partner</h3>
                            <p className="mt-2 mb-4 text-sm text-zinc-600 dark:text-zinc-400">
                                Tawazon Chemical Co. LLC upholds responsible business practices, integrating sustainability, compliance, and corporate
                                responsibility.
                            </p>
                        </div>
                        <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
                                    <circle cx="12" cy="12" r="10" className=""></circle>
                                    <path d="M12 6v6l4 2" className=""></path>
                                </svg>
                            </div>
                            <div className="">
                                <h5 className="font-semibold">ISO 9001:2015</h5>
                                <p className="text-sm mt-1">Quality Management</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className=""></path>
                                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" className=""></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12" className=""></line>
                                </svg>
                            </div>
                            <div className="">
                                <h5 className="font-semibold">ISO 14001:2015</h5>
                                <p className="text-sm mt-1">Environment Management</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" stroke-linecap="round" stroke-linejoin="round" className="text-blue-600">
                                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" className=""></path>
                                    <polyline points="3.27,6.96 12,12.01 20.73,6.96" className=""></polyline>
                                    <line x1="12" y1="22.08" x2="12" y2="12" className=""></line>
                                </svg>
                            </div>
                            <div className="">
                                <h5 className="font-semibold">ISO 45001:2018</h5>
                                <p className="text-sm mt-1">Occupational Health &amp; Safety Management</p>
                            </div>
                        </div>
                        <p className="text-sm mt-1">Fully compliant with Zakat and corporate tax regulations, Tawazon ensures ethical financial practices.</p>
                        </div>
                    </div>

                {/* Card 3: Metrics */}
                {/* <div className="glass-card group relative overflow-hidden border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                        <Icon icon="solar:chart-square-linear" width="20" strokeWidth="1.5"></Icon>
                    </div>
                    <h3 className="text-lg font-medium text-zinc-900 dark:text-white">Vital Metrics</h3>
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                        Track burnout indicators before they become critical issues.
                    </p>
                    <div className="mt-6 flex gap-2">
                         <div className="h-2 w-full rounded-full bg-linear-to-r from-emerald-500/50 to-emerald-500/10"></div>
                         <div className="h-2 w-1/3 rounded-full bg-zinc-200 dark:bg-white/5"></div>
                    </div>
                </div> */}

            </div>
            
            {/* Bottom Statement */}
            
        </div>
    </div></section>
    </>
  )
}

export default about