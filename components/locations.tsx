import React from 'react';
import { Icon } from '@iconify/react';
import { locations } from '@/services/locations';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';
import ContactSection from '@/components/contact-section';

export default function Locations() {
  return (
    <section className="sm:py-32 py-24">
      <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
        {/* Hero / Intro */}
        <div className="mb-12">
        <Badge variant="outline" className='mt-8'>
                <CircleDot data-icon="CircleDot" className='text-green-500'/>
                        Contact
              </Badge>
          <h1 className='pt-8'>
            Get in touch
          </h1>
          <p className="mt-4 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
            Have a question or need assistance? Reach out to us, and our team will get back to you promptly. We&apos;re here to support you with the right solutions and expert guidance.
          </p>
        </div>

        {/* Contact Form + Map - on top of locations */}
        <ContactSection />

        {/* Office Locations */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="glass-card group relative overflow-hidden space-y-4"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                <Icon icon="solar:map-point-linear" width="20" strokeWidth="1.5" />
              </div>
              <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                {location.officename}
              </h3>
              <h5>
                {location.city}, {location.country}
              </h5>
              <p className="text-sm">
                {location.address}
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href={`tel:${location.tel.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  <Icon icon="solar:phone-linear" width="16" strokeWidth="1.5" />
                  {location.tel}
                </a>
                <a
                  href={`mailto:${location.email}`}
                  className="flex items-center gap-2 text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                >
                  <Icon icon="solar:letter-linear" width="16" strokeWidth="1.5" />
                  {location.email}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
