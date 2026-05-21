import {
  normalizeSiteSectionVariant,
  type SiteSectionVariant,
} from '@/lib/section-appearance'
import {siteSectionByKeyQuery} from './queries'
import {sanityFetch} from './sanity-fetch'

export type SiteSectionHeader = {
  badgeLabel?: string
  title: string
  lead?: string
}

export type SiteSectionCta = {
  label: string
  url: string
  openInNewTab: boolean
}

export type SiteSectionContent = {
  key: string
  variant: SiteSectionVariant
  header: SiteSectionHeader
  cta: SiteSectionCta | null
  bodyText: string
  highlights: string[]
  mediaSrc: string
  mediaAlt: string
}

export type SiteSectionRaw = {
  key?: string | null
  sectionVariant?: string | null
  header?: {
    badgeLabel?: string | null
    title?: string | null
    lead?: string | null
  } | null
  cta?: {
    label?: string | null
    url?: string | null
    openInNewTab?: boolean | null
  } | null
  bodyText?: string | null
  highlights?: Array<{text?: string | null} | null> | null
  media?: {
    alt?: string | null
    asset?: {url?: string | null} | null
  } | null
}

const DEFAULT_HANDSHAKE = '/assets/images/handshake.jpg'

/** Default copy for keys used on the site before CMS documents exist. */
const FALLBACK_BY_KEY: Record<string, SiteSectionContent> = {
  'about-ghobash': {
    key: 'about-ghobash',
    variant: 'mutedDark',
    header: {
      badgeLabel: 'Ghobash Group Enterprise',
      title: 'Tawazon - Proud to be a Ghobash Group Enterprise',
      lead: 'Tawazon Chemical Co. LLC takes pride in being part of Ghobash Group.',
    },
    cta: {
      label: 'Ghobash Group website',
      url: 'https://ghobash.com/',
      openInNewTab: true,
    },
    bodyText:
      'With its corporate strategy focused on growth, sustainability and value creation, Ghobash Group extends a unique approach to nurturing and developing the most rewarding opportunities both intuitively and systematically. The Group seeks progressive partners and principals whose innovative products and services can deliver to the growing needs and aspirations of the public and private sectors.',
    highlights: [
      'Established in 1981 with its headquarters in the UAE.',
      'Premier privately-owned business conglomerate with unrivalled operational capabilities.',
      'Diverse team of 1,750+ professionals.',
      'Operating across multiple sectors of the economy.',
    ],
    mediaSrc: DEFAULT_HANDSHAKE,
    mediaAlt: 'Ghobash Group Enterprise',
  },
}

function highlightsToStrings(
  raw: SiteSectionRaw['highlights'],
  fallback: string[],
): string[] {
  if (!Array.isArray(raw) || raw.length === 0) return fallback
  const out = raw
    .map((h) => (h && typeof h.text === 'string' ? h.text.trim() : ''))
    .filter(Boolean)
  return out.length ? out : fallback
}

export function getSiteSectionFallback(key: string): SiteSectionContent | undefined {
  return FALLBACK_BY_KEY[key]
}

/** Turn a dereferenced `siteSection` document (e.g. from a page query) into render props. */
export function siteSectionDerefToContent(
  raw: SiteSectionRaw | null | undefined,
): SiteSectionContent | null {
  if (!raw) {
    return null
  }
  const sectionKey = typeof raw.key === 'string' ? raw.key.trim() : ''
  if (!sectionKey) {
    return null
  }
  const preset = FALLBACK_BY_KEY[sectionKey]
  const base: SiteSectionContent =
    preset ??
    ({
      key: sectionKey,
      variant: 'mutedDark',
      header: {title: 'Section'},
      cta: null,
      bodyText: '',
      highlights: [],
      mediaSrc: DEFAULT_HANDSHAKE,
      mediaAlt: '',
    } satisfies SiteSectionContent)
  return normalizeFromRaw(sectionKey, raw, base)
}

function normalizeFromRaw(
  sectionKey: string,
  raw: SiteSectionRaw,
  fb: SiteSectionContent,
): SiteSectionContent {
  const title = raw.header?.title?.trim() || fb.header.title
  const badge = raw.header?.badgeLabel?.trim() || fb.header.badgeLabel
  const leadRaw = raw.header?.lead?.trim()
  const lead = leadRaw !== undefined && leadRaw !== '' ? leadRaw : fb.header.lead

  const body = raw.bodyText?.trim() || fb.bodyText
  const variant = normalizeSiteSectionVariant(raw.sectionVariant ?? fb.variant)

  let cta: SiteSectionCta | null = fb.cta
  if (raw.cta?.label?.trim() && raw.cta.url?.trim()) {
    cta = {
      label: raw.cta.label.trim(),
      url: raw.cta.url.trim(),
      openInNewTab: raw.cta.openInNewTab !== false,
    }
  }

  const mediaUrl = raw.media?.asset?.url?.trim()
  const mediaAltFromRaw = raw.media?.alt?.trim()

  return {
    key: sectionKey,
    variant,
    header: {
      ...(badge ? {badgeLabel: badge} : {}),
      title,
      ...(lead ? {lead} : {}),
    },
    cta,
    bodyText: body,
    highlights: highlightsToStrings(raw.highlights, fb.highlights),
    mediaSrc: mediaUrl || fb.mediaSrc,
    mediaAlt: mediaUrl ? (mediaAltFromRaw || fb.mediaAlt || 'Image') : fb.mediaAlt,
  }
}

export async function getSiteSectionContent(sectionKey: string): Promise<SiteSectionContent | null> {
  const preset = FALLBACK_BY_KEY[sectionKey]
  const raw = await sanityFetch<SiteSectionRaw | null>(siteSectionByKeyQuery, {key: sectionKey})

  if (!raw && !preset) {
    return null
  }

  const base: SiteSectionContent =
    preset ??
    ({
      key: sectionKey,
      variant: 'mutedDark',
      header: {title: 'Section'},
      cta: null,
      bodyText: '',
      highlights: [],
      mediaSrc: DEFAULT_HANDSHAKE,
      mediaAlt: '',
    } satisfies SiteSectionContent)

  if (!raw) {
    return preset ?? null
  }

  return normalizeFromRaw(sectionKey, raw, base)
}
