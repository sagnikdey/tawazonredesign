import React from 'react'
import Link from 'next/link';
import { Icon } from '@iconify/react';
import ThemeToggle from './theme-toggle';
import { Button } from './ui/button';

const navigation = () => {
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md dark:border-white/5 dark:bg-[#030303]/80">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6">
           
            <Link href="/" className="flex items-center gap-2 group">
                <div className="relative flex h-6 w-6 items-center justify-center overflow-hidden rounded-md bg-zinc-900 text-white transition-transform duration-500 group-hover:rotate-180 dark:bg-white dark:text-black">
                   <Icon icon="solar:scale-linear" width="16" strokeWidth="1.5" />
                </div>
                <span className="text-sm font-semibold tracking-widest uppercase text-zinc-900 dark:text-white">Tawazon</span>
            </Link>

            {/* Desktop Links */}
            <div className="hidden items-center gap-2 md:flex">
                <Button variant="ghost" asChild><Link href="/about-us">About Us</Link></Button>
                <Button variant="ghost" asChild><Link href="/industries">Industries</Link></Button>
                <Button variant="ghost" asChild><Link href="/suppliers">Suppliers</Link></Button>
                <Button variant="ghost" asChild><Link href="/careers">Careers</Link></Button>
                <Button variant="ghost" asChild><Link href="/locations">Locations</Link></Button>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
                <ThemeToggle />
                <a href="#" className="hidden text-xs font-medium text-zinc-600 transition-opacity hover:opacity-70 dark:text-zinc-300 md:block">Log in</a>
                <a href="#" className="group relative flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200">
                    <span>Get Connected</span>
                    <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-0.5" strokeWidth="1.5" />
                </a>
            </div>
        </div>
    </nav>
  )
}

export default navigation