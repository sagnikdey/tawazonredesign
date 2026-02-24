'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { industries } from '@/services/industries';
import { Button } from '@/components/ui/button';
import { Separator } from './ui/separator';

const footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for newsletter signup logic
    setEmail('');
  };

  return (
    <section className="border-t border-zinc-200 bg-zinc-50 pb-10 pt-16 dark:border-white/10 dark:bg-[#030303]">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo + Newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-5 w-5 items-center justify-center rounded bg-zinc-900 text-white dark:bg-zinc-800">
                <Icon icon="solar:scale-linear" width="14" strokeWidth="1.5" />
              </div>
              <span className="text-sm font-semibold tracking-widest text-zinc-900 uppercase dark:text-white">
                Tawazon
              </span>
            </Link>
            <p className="mt-4 max-w-xs leading-relaxed text-sm">
            We&apos;re a specialty chemical distributor connecting leading manufacturers with industries across the globe.
            </p>
            {/* Newsletter */}
            <Separator className="my-4 max-w-xs" />
            <form
              onSubmit={handleNewsletterSubmit}
              className="mt-6 gap-2 flex flex-col"
            >
                <p className="text-sm font-semibold">Subscribe to our newsletter</p>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-9 rounded-md border border-zinc-200 bg-white px-3 text-xs placeholder:text-zinc-400 focus:border-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-400 dark:border-white/10 dark:bg-white/5 dark:placeholder:text-zinc-500 dark:focus:border-white/30 dark:focus:ring-white/30"
              />
              <Button type="submit" size="sm" variant="default" className="shrink-0">
                Subscribe
              </Button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
              Links
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-zinc-500">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-black dark:hover:text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#team"
                  className="hover:text-black dark:hover:text-white"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-black dark:hover:text-white"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-black dark:hover:text-white"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
              Industries
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-zinc-500">
              {industries.map((industry) => (
                <li key={industry.id}>
                  <Link
                    href={industry.link}
                    className="hover:text-black dark:hover:text-white"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
              Legal
            </h4>
            <ul className="mt-4 space-y-3 text-xs text-zinc-500">
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-black dark:hover:text-white"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex items-center justify-between border-t border-zinc-200 pt-8 dark:border-white/5">
          <p className="text-xs text-zinc-500">
            © 2026 Tawazon Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-zinc-400 hover:text-black dark:hover:text-white"
            >
              <Icon icon="solar:brand-twitter-linear" />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-black dark:hover:text-white"
            >
              <Icon icon="solar:brand-github-linear" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default footer;
