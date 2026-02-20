import React from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import Locations from '@/components/locations';

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      <Locations />
      <Footer />
    </div>
  );
}
