import React from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Suppliers from '@/components/suppliers';
import { fetchPageHeaderBySlug } from '@/lib/sanity/fetch-page-header';
import { resolvePageHeaderFields } from '@/lib/sanity/page-header-defaults';

export default async function SuppliersPage() {
  const slug = 'suppliers';
  const data = await fetchPageHeaderBySlug(slug);
  const header = resolvePageHeaderFields(slug, data);

  return (
    <div className="bg-canvas min-h-screen font-sans">
      <Navigation />
      <Suppliers header={header} />
      <Footer />
    </div>
  );
}
