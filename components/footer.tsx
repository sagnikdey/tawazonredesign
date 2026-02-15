import React from 'react'
import { Icon } from '@iconify/react';

const footer = () => {
  return (
    <section className="border-t border-zinc-200 bg-zinc-50 pb-10 pt-16 dark:border-white/10 dark:bg-[#030303]">

        <div className="mx-auto max-w-[1400px] px-6">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
                <div className="col-span-2 lg:col-span-2">
                    <a href="#" className="flex items-center gap-2">
                         <div className="flex h-5 w-5 items-center justify-center rounded bg-zinc-900 text-white dark:bg-zinc-800">
                            <Icon icon="solar:scale-linear" width="14" strokeWidth="1.5"></Icon>
                        </div>
                        <span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-white">Tawazon</span>
                    </a>
                    <p className="mt-4 max-w-xs text-xs text-zinc-500">
                        Designing the future of work-life integration. Built with precision for the modern mind.
                    </p>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">Product</h4>
                    <ul className="mt-4 space-y-3 text-xs text-zinc-500">
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Features</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Integrations</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Pricing</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Changelog</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">Company</h4>
                    <ul className="mt-4 space-y-3 text-xs text-zinc-500">
                        <li><a href="#" className="hover:text-black dark:hover:text-white">About</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Careers</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Blog</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Contact</a></li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">Legal</h4>
                    <ul className="mt-4 space-y-3 text-xs text-zinc-500">
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Privacy</a></li>
                        <li><a href="#" className="hover:text-black dark:hover:text-white">Terms</a></li>
                    </ul>
                </div>
            </div>
            <div className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-8 dark:border-white/5">
                <p className="text-xs text-zinc-500">© 2023 Tawazon Inc. All rights reserved.</p>
                <div className="flex gap-4">
                    <a href="#" className="text-zinc-400 hover:text-black dark:hover:text-white"><Icon icon="solar:brand-twitter-linear"></Icon></a>
                    <a href="#" className="text-zinc-400 hover:text-black dark:hover:text-white"><Icon icon="solar:brand-github-linear"></Icon></a>
                </div>
            </div>
        </div>

    </section>
  )
}

export default footer