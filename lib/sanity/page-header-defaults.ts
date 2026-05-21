import {SUPPLIERS_INTRO} from '@/services/suppliers'
import type {IndustryConfig} from '@/services/industries-types'
import type {PageHeaderPayload} from './types'

const PAGE_HEADER_DEFAULTS: Record<string, {badgeLabel: string; heading: string}> = {
  'about-us': {
    badgeLabel: 'Who we are',
    heading: 'Redefining excellence in chemical distribution',
  },
  industries: {
    badgeLabel: 'Industries Served',
    heading: 'Innovative solutions for a sustainable tomorrow',
  },
  careers: {
    badgeLabel: 'Careers',
    heading: 'Build your career with Tawazon',
  },
  locations: {
    badgeLabel: 'Contact',
    heading: 'Get in touch',
  },
  suppliers: {
    badgeLabel: SUPPLIERS_INTRO.badge,
    heading: SUPPLIERS_INTRO.heading,
  },
}

function industryFallback(config: IndustryConfig) {
  return {
    badgeLabel: 'Industries Served',
    heading: `${config.name} Division`,
  }
}

export function resolvePageHeaderFields(
  slug: string,
  data: PageHeaderPayload | null,
  options?: {industry?: IndustryConfig},
): {badgeLabel: string; heading: string} {
  const isIndustry = slug.startsWith('industry-')
  const staticFallback = PAGE_HEADER_DEFAULTS[slug]
  const fallback =
    staticFallback ?? (isIndustry && options?.industry ? industryFallback(options.industry) : {badgeLabel: '', heading: ''})

  return {
    badgeLabel: data?.badgeLabel ?? fallback.badgeLabel,
    heading: data?.heading ?? fallback.heading,
  }
}
