import React from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Icon } from '@iconify/react';
import { PageHeader } from '@/components/page-header';
import { stableContentKey } from '@/lib/utils';

export default async function CareersPage() {
  const benefits = [
    {
      title: 'Global Opportunities',
      description:
        'Work across 8 offices worldwide with opportunities for international assignments and career growth.',
      icon: 'solar:global-linear',
    },
    {
      title: 'Professional Development',
      description:
        'Continuous learning opportunities, training programs, and mentorship to advance your career.',
      icon: 'solar:diploma-linear',
    },
    {
      title: 'Innovative Environment',
      description:
        'Join a team of 165+ professionals working with cutting-edge technologies and solutions.',
      icon: 'solar:lightbulb-linear',
    },
    {
      title: 'Competitive Benefits',
      description:
        'Comprehensive benefits package including health insurance, retirement plans, and performance bonuses.',
      icon: 'solar:wallet-linear',
    },
    {
      title: 'Work-Life Balance',
      description:
        'Flexible work arrangements and policies that support a healthy work-life balance.',
      icon: 'solar:calendar-linear',
    },
    {
      title: 'Diverse Culture',
      description:
        'Inclusive workplace culture that values diversity, collaboration, and different perspectives.',
      icon: 'solar:users-group-rounded-linear',
    },
  ];

  const openPositions = [
    {
      title: 'Sales Manager',
      department: 'Sales & Business Development',
      location: 'Dubai, UAE',
      type: 'Full-time',
    },
    {
      title: 'Chemical Engineer',
      department: 'Technical Services',
      location: 'Multiple Locations',
      type: 'Full-time',
    },
    {
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'India',
      type: 'Full-time',
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Control',
      location: 'Saudi Arabia',
      type: 'Full-time',
    },
  ];

  return (
    <div className="bg-canvas min-h-screen items-center justify-center font-sans">
      <Navigation />

      <section className="bg-section-alt sm:py-32 pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <PageHeader slug="careers">
                <p className="text-muted-foreground mt-4 text-base">
                  Join our team of passionate professionals and be part of a company that&apos;s shaping the
                  future of chemical distribution.
                </p>
              </PageHeader>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-foreground mb-6 text-2xl font-semibold">Why Work With Us</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {benefits.map((benefit, idx) => {
                const fingerprint = `${benefit.title}:${benefit.icon}`
                const priorDupes = benefits
                  .slice(0, idx)
                  .filter((b) => `${b.title}:${b.icon}` === fingerprint).length
                const benefitKey = stableContentKey(fingerprint, priorDupes)
                return (
                <div
                  key={benefitKey}
                  className="glass-card glass-card-hover group relative overflow-hidden"
                >
                  <div className="icon-box">
                    <Icon icon={benefit.icon} width="20" strokeWidth="1.5" />
                  </div>
                  <h3 className="text-foreground mb-2 text-lg font-medium">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
                )
              })}
            </div>
          </div>

          <div>
            <h2 className="text-foreground mb-6 text-2xl font-semibold">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position) => (
                <div
                  key={`${position.title}-${position.department}-${position.location}-${position.type}`}
                  className="glass-card glass-card-hover group !p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-foreground mb-1 text-lg font-semibold">
                        {position.title}
                      </h3>
                      <div className="text-muted-foreground flex flex-wrap gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:briefcase-linear" width="16" strokeWidth="1.5" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:map-point-linear" width="16" strokeWidth="1.5" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Icon icon="solar:clock-circle-linear" width="16" strokeWidth="1.5" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                    <a
                      href="#apply"
                      className="border-border bg-card text-foreground hover:bg-muted group inline-flex items-center gap-2 rounded-full border px-6 py-2 text-sm font-medium transition-all"
                    >
                      Apply Now
                      <Icon
                        icon="solar:arrow-right-linear"
                        className="transition-transform group-hover:translate-x-1"
                        width="16"
                        strokeWidth="1.5"
                      />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
