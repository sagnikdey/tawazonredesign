import React from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Suppliers from '@/components/suppliers';

export default function SuppliersPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      <Suppliers />
      <Footer />
    </div>
  );
}
