import React from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { PageModules } from '@/components/page-modules';

export default function AboutUsPage() {
  return (
    <>
    <div className="bg-canvas min-h-screen items-center justify-center">
      <Navigation />

      <PageModules pageSlug="about-us" />

       </div>
       <Footer />
       </>
   );
 }
