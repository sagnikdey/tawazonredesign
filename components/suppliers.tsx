'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import {
  SUPPLIERS_INTRO,
  SUPPLIERS_BUILDING_CONNECTIONS,
  SUPPLIER_CATEGORIES,
  type Supplier,
} from '@/services/suppliers';

function SupplierLogo({ supplier }: { supplier: Supplier }) {
  const [imgError, setImgError] = useState(false);

  const content = (
    <div className="flex h-16 w-24 items-center justify-center rounded-lg border border-zinc-200 bg-white p-3 transition-all hover:border-emerald-500/50 hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:border-emerald-500/30">
      {imgError ? (
        <span className="text-center text-xs font-medium text-zinc-500 dark:text-zinc-400">
          {supplier.name}
        </span>
      ) : (
        <Image
          src={supplier.logo}
          alt={supplier.name}
          width={96}
          height={64}
          className="h-full w-full object-contain"
          onError={() => setImgError(true)}
        />
      )}
    </div>
  );

  return (
    <a
      href={supplier.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
      title={supplier.name}
    >
      {content}
    </a>
  );
}

export default function Suppliers() {
  return (
    <section className="sm:py-32 dark:bg-[#030303] bg-white pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          {/* Hero / Intro */}
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span>{SUPPLIERS_INTRO.badge}</span>
              </div>
              <h1 className="dark:text-white md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight">
                {SUPPLIERS_INTRO.heading}
              </h1>
              <h2 className="mt-2 text-xl font-medium text-zinc-800 dark:text-white md:text-3xl">
                {SUPPLIERS_INTRO.title}
              </h2>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                {SUPPLIERS_INTRO.description}
              </p>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                {SUPPLIERS_INTRO.subDescription}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-zinc-700 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                Contact us
                <Icon
                  icon="solar:arrow-right-linear"
                  className="transition-transform group-hover:translate-x-0.5"
                  width="16"
                  strokeWidth="1.5"
                />
              </Link>
            </div>
          </div>

          {/* Building connections */}
          <div className="glass-card mb-16 border border-zinc-200 bg-zinc-50 p-8 dark:border-white/10 dark:bg-white/5 md:p-12">
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white md:text-2xl">
              {SUPPLIERS_BUILDING_CONNECTIONS.title}
            </h3>
            <p className="mt-4 text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
              {SUPPLIERS_BUILDING_CONNECTIONS.description}
            </p>
          </div>

          {/* Supplier categories with logos */}
          {SUPPLIER_CATEGORIES.map((category) => (
            <div key={category.id} className="mb-16">
              <h3 className="mb-6 text-lg font-semibold text-zinc-900 dark:text-white md:text-xl">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {category.suppliers.map((supplier) => (
                  <SupplierLogo key={`${category.id}-${supplier.name}`} supplier={supplier} />
                ))}
              </div>
            </div>
          ))}
        </div>
    </section>
  );
}
