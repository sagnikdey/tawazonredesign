import React from 'react';
import { Icon } from '@iconify/react';
import { locations } from '@/services/locations';
import { Badge } from '@/components/ui/badge';
import { CircleDot } from 'lucide-react';

export default function LocationsOffices() {
  return (
    <section id="offices" className="bg-muteddark">
      <div className="mb-12 sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
        <Badge variant="outline" className="mt-8">
          <CircleDot data-icon="CircleDot" className="text-brand-accent" />
          Tawazon Offices
        </Badge>
        <h2 className="pt-8">Offices</h2>
        <p className="text-muted-foreground mt-4 max-w-2xl text-base">
          Have a question or need assistance? Reach out to us, and our team will get back to you promptly.
          We&apos;re here to support you with the right solutions and expert guidance.
        </p>
      </div>
      <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {locations.map((location) => (
          <div
            key={location.id}
            className="glass-card group relative overflow-hidden space-y-4"
          >
            <div className="icon-box">
              <Icon icon="solar:map-point-linear" width="20" strokeWidth="1.5" />
            </div>
            <h3 className="text-foreground text-xl font-semibold">
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
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Icon icon="solar:phone-linear" width="16" strokeWidth="1.5" />
                {location.tel}
              </a>
              <a
                href={`mailto:${location.email}`}
                className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm"
              >
                <Icon icon="solar:letter-linear" width="16" strokeWidth="1.5" />
                {location.email}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
