import React from 'react';
import Navigation from '@/components/navigation';
import Footer from '@/components/footer';
import LocationsOffices from '@/components/locations-offices';
import ContactSection from '@/components/contact-section';
import { PageHeader } from '@/components/page-header';

export default async function LocationsPage() {
  return (
    <div className="bg-canvas min-h-screen font-sans">
      <Navigation />
      <section className="sm:py-32 py-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          <PageHeader slug="locations" badgeClassName="mt-8" className="mb-12" />
          <p className="text-muted-foreground mt-4 mb-12 max-w-2xl text-base">
            Have a question or need assistance? Reach out to us, and our team will get back to you promptly.
            We&apos;re here to support you with the right solutions and expert guidance.
          </p>
          <ContactSection />
        </div>
      </section>
      <LocationsOffices />
      <Footer />
    </div>
  );
}
