import React from 'react'
import { Icon } from '@iconify/react';
import Card from './card';

const industries = () => {
  return (
    <>
    <section id="about">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
            
            <div className="mb-8 md:flex md:items-end md:justify-between">
                
                <div className="max-w-xl">
                    <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                        <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                        <span>Industries Served</span>
                    </div>
                    <h2 className="dark:text-white md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight">Innovative solutions for a sustainable tomorrow.</h2>
                    <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">Tawazon actively develops and supplies innovative, eco-friendly chemical solutions that support sustainability.</p>
                </div>
                <div className="mt-6 md:mt-0">
                    <a href="#" className="group flex items-center gap-2 text-sm text-zinc-900 hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300">
                        Read full story
                        <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1"></Icon>
                    </a>
                </div>
            </div>

            
            
        </div>
        <Card />
    </section>
    
    </>
  )
}

export default industries