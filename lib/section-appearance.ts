import {cn} from '@/lib/utils'

export type SiteSectionVariant = 'mutedDark' | 'sectionAlt' | 'canvas' | 'default'

export const SITE_SECTION_VARIANT_CLASS: Record<SiteSectionVariant, string> = {
  mutedDark: 'bg-muteddark',
  sectionAlt: 'bg-section-alt',
  canvas: 'bg-canvas',
  default: '',
}

export function normalizeSiteSectionVariant(value: string | null | undefined): SiteSectionVariant {
  if (value === 'sectionAlt' || value === 'canvas' || value === 'default' || value === 'mutedDark') {
    return value
  }
  return 'mutedDark'
}

export function siteSectionSurfaceClass(variant: SiteSectionVariant, className?: string) {
  return cn(SITE_SECTION_VARIANT_CLASS[variant], className)
}
