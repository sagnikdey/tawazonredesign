import React from 'react';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';
import { Icon } from '@iconify/react';

export default function CareersPage() {
  const benefits = [
    {
      title: 'Global Opportunities',
      description: 'Work across 8 offices worldwide with opportunities for international assignments and career growth.',
      icon: 'solar:global-linear'
    },
    {
      title: 'Professional Development',
      description: 'Continuous learning opportunities, training programs, and mentorship to advance your career.',
      icon: 'solar:diploma-linear'
    },
    {
      title: 'Innovative Environment',
      description: 'Join a team of 165+ professionals working with cutting-edge technologies and solutions.',
      icon: 'solar:lightbulb-linear'
    },
    {
      title: 'Competitive Benefits',
      description: 'Comprehensive benefits package including health insurance, retirement plans, and performance bonuses.',
      icon: 'solar:wallet-linear'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible work arrangements and policies that support a healthy work-life balance.',
      icon: 'solar:calendar-linear'
    },
    {
      title: 'Diverse Culture',
      description: 'Inclusive workplace culture that values diversity, collaboration, and different perspectives.',
      icon: 'solar:users-group-rounded-linear'
    }
  ];

  const openPositions = [
    {
      title: 'Sales Manager',
      department: 'Sales & Business Development',
      location: 'Dubai, UAE',
      type: 'Full-time'
    },
    {
      title: 'Chemical Engineer',
      department: 'Technical Services',
      location: 'Multiple Locations',
      type: 'Full-time'
    },
    {
      title: 'Supply Chain Coordinator',
      department: 'Operations',
      location: 'India',
      type: 'Full-time'
    },
    {
      title: 'Quality Assurance Specialist',
      department: 'Quality Control',
      location: 'Saudi Arabia',
      type: 'Full-time'
    }
  ];

  return (
    <div className="min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Navigation />
      
      <section className="sm:py-32 dark:bg-[#030303] bg-white pt-24 pb-24">
        <div className="sm:px-12 xl:px-24 max-w-[1400px] mr-auto ml-auto pr-6 pl-6">
          
          <div className="mb-8 md:flex md:items-end md:justify-between">
            <div className="max-w-xl">
              <div className="mb-8 flex w-fit items-center gap-2 rounded-full border border-zinc-200 bg-white/50 px-3 py-1 text-xs text-zinc-600 backdrop-blur-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                <span>Careers</span>
              </div>
              <h1 className="dark:text-white md:text-5xl text-3xl font-semibold text-zinc-900 tracking-tight">
                Build your career with Tawazon
              </h1>
              <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400">
                Join our team of passionate professionals and be part of a company that's shaping the future of chemical distribution.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Why Work With Us</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="glass-card group relative overflow-hidden border border-zinc-200 bg-zinc-50 p-8 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-white">
                    <Icon icon={benefit.icon} width="20" strokeWidth="1.5" />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions Section */}
          <div>
            <h2 className="text-2xl font-semibold text-zinc-900 dark:text-white mb-6">Open Positions</h2>
            <div className="space-y-4">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="glass-card group border border-zinc-200 bg-zinc-50 p-6 transition-colors hover:bg-zinc-100 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-1">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
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
                      className="group inline-flex items-center gap-2 px-6 py-2 rounded-full border border-zinc-200 bg-white text-sm font-medium text-zinc-900 transition-all hover:bg-zinc-100 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
                    >
                      Apply Now
                      <Icon icon="solar:arrow-right-linear" className="transition-transform group-hover:translate-x-1" width="16" strokeWidth="1.5" />
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
