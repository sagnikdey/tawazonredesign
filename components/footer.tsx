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
    <section className="border-footer-border bg-footer-bg border-t pb-10 pt-16">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5">
          {/* Logo + Newsletter */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-logo-mark-bg text-logo-mark-fg flex h-5 w-5 items-center justify-center rounded">
                <Icon icon="solar:scale-linear" width="14" strokeWidth="1.5" />
              </div>
              <span className="text-foreground text-sm font-semibold tracking-widest uppercase">
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
                className="border-border bg-card placeholder:text-muted-foreground focus:border-ring focus:ring-ring/50 h-9 rounded-md border px-3 text-xs focus:outline-none focus:ring-1"
              />
              <Button type="submit" size="sm" variant="default" className="shrink-0">
                Subscribe
              </Button>
              </div>
            </form>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-foreground text-xs font-semibold">
              Links
            </h4>
            <ul className="text-footer-muted mt-4 space-y-3 text-xs">
              <li>
                <Link
                  href="/about-us"
                  className="hover:text-foreground"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us#team"
                  className="hover:text-foreground"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/industries"
                  className="hover:text-foreground"
                >
                  Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/locations"
                  className="hover:text-foreground"
                >
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-foreground text-xs font-semibold">
              Industries
            </h4>
            <ul className="text-footer-muted mt-4 space-y-3 text-xs">
              {industries.map((industry) => (
                <li key={industry.id}>
                  <Link
                    href={industry.link}
                    className="hover:text-foreground"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-foreground text-xs font-semibold">
              Legal
            </h4>
            <ul className="text-footer-muted mt-4 space-y-3 text-xs">
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-foreground"
                >
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-footer-divider mt-16 flex items-center justify-between border-t pt-8">
          <p className="text-footer-muted text-xs">
            © 2026 Tawazon Inc. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-footer-link hover:text-foreground"
            >
              <Icon icon="solar:brand-twitter-linear" />
            </a>
            <a
              href="#"
              className="text-footer-link hover:text-foreground"
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
