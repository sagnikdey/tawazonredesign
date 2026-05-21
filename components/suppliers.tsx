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
import { PageHeaderContent } from '@/components/page-header-content';

function SupplierLogo({ supplier }: { supplier: Supplier }) {
  const [imgError, setImgError] = useState(false);

  const content = (
    <div className="border-border bg-card hover:border-brand-accent/50 flex h-16 w-24 items-center justify-center rounded-lg border p-3 transition-all hover:shadow-md">
      {imgError ? (
        <span className="text-muted-foreground text-center text-xs font-medium">
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

export default function Suppliers({
  header,
}: {
  header: { badgeLabel: string; heading: string };
}) {
  return (
    <section className="bg-section-alt sm:py-32 pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          {/* Hero / Intro */}
          <div className="mb-12 md:flex md:items-end md:justify-between">
            <div className="max-w-2xl">
              <PageHeaderContent badgeLabel={header.badgeLabel} heading={header.heading} />
              <h2 className="text-foreground mt-2 text-xl font-medium md:text-3xl">
                {SUPPLIERS_INTRO.title}
              </h2>
              <p className="text-muted-foreground mt-4 text-base">
                {SUPPLIERS_INTRO.description}
              </p>
              <p className="text-muted-foreground mt-4 text-base">
                {SUPPLIERS_INTRO.subDescription}
              </p>
            </div>
            <div className="mt-6 md:mt-0">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all"
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
          <div className="glass-card mb-16 md:p-12">
            <h3 className="text-foreground text-xl font-semibold md:text-2xl">
              {SUPPLIERS_BUILDING_CONNECTIONS.title}
            </h3>
            <p className="text-muted-foreground mt-4 text-base leading-relaxed">
              {SUPPLIERS_BUILDING_CONNECTIONS.description}
            </p>
          </div>

          {/* Supplier categories with logos */}
          {SUPPLIER_CATEGORIES.map((category) => (
            <div key={category.id} className="mb-16">
              <h3 className="text-foreground mb-6 text-lg font-semibold md:text-xl">
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
