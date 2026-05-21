'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import type { IndustryConfig, IndustryCategory } from '@/services/industries-types';
import { PageHeaderContent } from '@/components/page-header-content';

const INDUSTRY_ICONS: Record<string, string> = {
  binders: 'solar:pill-linear',
  binder: 'solar:pill-linear',
  pigments: 'solar:plant-2-linear',
  additives: 'solar:factory-linear',
  miscellaneous: 'solar:box-linear',
  pvc: 'solar:cup-linear',
  'pet-pc-engg-polymers': 'solar:cpu-linear',
  'polyolefin-compounds': 'solar:box-linear',
  masterbatch: 'solar:palette-linear',
  'dosing-unit': 'solar:settings-linear',
  films: 'solar:document-linear',
  'aluminum-foil': 'solar:medal-linear',
  adhesives: 'solar:glue-linear',
  inks: 'solar:pen-linear',
  'extrusion-coated-paper': 'solar:document-text-linear',
  'tools-equipment': 'solar:hammer-linear',
  'releasing-agents': 'solar:refresh-linear',
  'cleaning-agents': 'solar:cleaner-linear',
  'gp-resins-gelcoat': 'solar:flask-linear',
  'glass-reinforcements': 'solar:atom-linear',
  'specialty-minerals': 'solar:minimalistic-magnifer-linear',
  'waxes-processing-aids': 'solar:water-drops-linear',
  'ultramarine-pigments': 'solar:palette-2-linear',
  botanicals: 'solar:leaf-linear',
  'koda-potassium-bicarbonate': 'solar:flask-linear',
  nutraceuticals: 'solar:heart-linear',
  'pell-low-sodium-baking-powder': 'solar:cup-linear',
  'vitamins-vitamin-blends': 'solar:vitamins-linear',
  default: 'solar:box-linear',
};

function getCategoryIcon(category: IndustryCategory): string {
  return INDUSTRY_ICONS[category.id] ?? INDUSTRY_ICONS.default;
}

export default function IndustryPage({
  config,
  header,
}: {
  config: IndustryConfig;
  header: { badgeLabel: string; heading: string };
}) {
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(
    null
  );
  const [productsSheetOpen, setProductsSheetOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] =
    useState<IndustryCategory | null>(null);

  const firstCategory = config.categories[0];
  const otherCards = config.otherCards;
  const remainingCategories = config.categories.slice(1);
  const directViewProducts = config.directViewProducts ?? false;

  const openProductsSheet = (category: IndustryCategory) => {
    setSelectedCategory(category);
    setProductsSheetOpen(true);
  };

  return (
    <div className="min-h-screen items-center justify-center">
      <Navigation />

      <section className="sm:py-32 py-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-3xl">
              <PageHeaderContent badgeLabel={header.badgeLabel} heading={header.heading} />
              <p className="mt-4 text-base">
                {config.overview}
              </p>
            </div>
          </div>

          <div className="relative">
            <div
              className={`grid gap-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-6 transition-all duration-500 ease-out ${
                !directViewProducts && expandedCategoryId
                  ? 'opacity-0 scale-95 pointer-events-none absolute inset-0 h-0 overflow-hidden'
                  : ''
              }`}
            >
              {/* directViewProducts: all categories with View Products */}
              {directViewProducts ? (
                config.categories.map((cat) => (
                  <div
                    key={cat.id}
                    className="glass-card group relative overflow-hidden justify-between h-full flex flex-col"
                  >
                    <div>
                      <div className="icon-box">
                        <Icon
                          icon={getCategoryIcon(cat)}
                          width="20"
                          strokeWidth="1.5"
                        />
                      </div>
                      <h4>
                        {cat.title}
                      </h4>
                      <p className="text-sm leading-relaxed">
                        {cat.description}
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button
                        variant="outline"
                        onClick={() => openProductsSheet(cat)}
                      >
                        View Products
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <>
                  {/* First category card */}
                  <div className="glass-card group relative overflow-hidden justify-between h-full flex flex-col">
                    <div>
                      <div className="icon-box">
                        <Icon
                          icon={getCategoryIcon(firstCategory)}
                          width="20"
                          strokeWidth="1.5"
                        />
                      </div>
                      <h2 className="text-xl font-medium mb-2">
                        {firstCategory.title}
                      </h2>
                      <p className="text-sm leading-relaxed">
                        {firstCategory.description}
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        className="group-hover:bg-accent group-hover:group-hover:border-accent"
                        onClick={() => setExpandedCategoryId(firstCategory.id)}
                      >
                        Read More
                      </Button>
                    </div>
                  </div>

                  {/* Other cards */}
                  {otherCards ? (
                otherCards.map((card) => (
                  <div
                    key={card.link}
                    className="glass-card group relative overflow-hidden h-full flex flex-col justify-between"
                  >
                    <div>
                      <div className="icon-box">
                        <Icon icon={card.icon} width="20" strokeWidth="1.5" />
                      </div>
                      <h2 className="text-xl font-medium mb-2">
                        {card.name}
                      </h2>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                    <div className="pt-4">
                      <Button
                        variant="default"
                        size="sm"
                        className="group-hover:bg-accent group-hover:group-hover:border-accent"
                        asChild
                      >
                        <Link href={card.link}>Read More</Link>
                      </Button>
                    </div>
                  </div>
                ))
                  ) : (
                    remainingCategories.map((cat) => (
                      <div
                        key={cat.id}
                        className="glass-card group relative overflow-hidden"
                      >
                        <div className="icon-box">
                          <Icon
                            icon={getCategoryIcon(cat)}
                            width="20"
                            strokeWidth="1.5"
                          />
                        </div>
                        <h2 className="text-foreground text-xl font-medium">
                          {cat.title}
                        </h2>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {cat.description}
                        </p>
                        <div className="pt-4">
                          <Button
                            variant="outline"
                            className="group-hover:bg-accent group-hover:group-hover:border-accent"
                            onClick={() => setExpandedCategoryId(cat.id)}
                          >
                            Read More
                          </Button>
                        </div>
                      </div>
                    ))
                  )}
                </>
              )}
            </div>

            {/* Expanded view - hidden when directViewProducts */}
            {!directViewProducts && (
            <div
              className={`overflow-hidden transition-all duration-500 ease-out ${
                expandedCategoryId
                  ? 'opacity-100 max-h-[2000px] translate-y-0'
                  : 'opacity-0 max-h-0 -translate-y-4 pointer-events-none'
              }`}
            >
              {(() => {
                const expanded =
                  config.categories.find((c) => c.id === expandedCategoryId) ??
                  firstCategory;
                const subcats = expanded.subcategories ?? [expanded];
                const hasSubcategories = expanded.subcategories?.length;

                return (
                  <div
                    className={`glass-card group relative overflow-hidden sm:p-8 transition-transform duration-500 ${
                      expandedCategoryId ? 'scale-100' : 'scale-95'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <h2 className="text-2xl font-bold">{expanded.title}</h2>
                      <button
                        type="button"
                        onClick={() => setExpandedCategoryId(null)}
                        aria-label="Close"
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full "
                      >
                        <Icon
                          icon="solar:close-circle-linear"
                          width="24"
                          strokeWidth="1.5"
                        />
                      </button>
                    </div>

                    <p className="mb-8 text-sm leading-relaxed">
                      {expanded.description}
                    </p>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {hasSubcategories
                        ? subcats.map((cat) => (
                            <div
                              key={cat.id}
                              className="flex flex-col glass-card group relative "
                            >
                              <h3 className="text-base font-semibold mb-2">
                                {cat.title}
                              </h3>
                              <p className="flex-1 text-sm leading-relaxed mb-4">
                                {cat.description}
                              </p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-fit"
                                onClick={() => openProductsSheet(cat)}
                              >
                                View Products
                              </Button>
                            </div>
                          ))
                        : subcats.map((cat) => (
                            <div
                              key={cat.id}
                              className="flex flex-col glass-card group relative overflow-hidden"
                            >
                              <h3 className="text-base font-semibold mb-2">
                                {cat.title}
                              </h3>
                              <p className="flex-1 text-sm leading-relaxed mb-4">
                                {cat.description}
                              </p>
                              <Button
                                size="sm"
                                variant="outline"
                                className="w-fit"
                                onClick={() => openProductsSheet(cat)}
                              >
                                View Products
                              </Button>
                            </div>
                          ))}
                    </div>
                  </div>
                );
              })()}
            </div>
            )}
          </div>
        </div>
      </section>

      <Footer />

      <Sheet open={productsSheetOpen} onOpenChange={setProductsSheetOpen}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-xl overflow-y-auto"
        >
          <SheetHeader>
            <SheetTitle className="text-xl">
              {selectedCategory?.title ?? 'Products'}
            </SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 px-4 pb-8">
            {selectedCategory?.products?.map((product, idx) => {
                  const priorDupes = selectedCategory.products
                    .slice(0, idx)
                    .filter(
                      (p) => p.name === product.name && p.description === product.description,
                    ).length
                  const productKey =
                    `${selectedCategory.id}:${product.name}:${product.description.length}:${priorDupes}`
                  return (
                  <div
                    key={productKey}
                    className="border-border rounded-lg border p-4"
                  >
                    <h4 className="text-foreground font-semibold">
                      {product.name}
                    </h4>
                    <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                      {product.description}
                    </p>
                    <Button size="sm" variant="outline" className="mt-3">
                      Request TDS
                    </Button>
                  </div>
                )
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
