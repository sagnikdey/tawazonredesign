import {sanityFetch} from './sanity-fetch'
import {aboutPageQuery} from './queries'
import {stableContentKey} from '@/lib/utils'

export type AboutKpiVariant = 'primary' | 'secondary' | 'outline'

export type AboutTextBlockVm = {
  /** Sanity array `_key` when present — stable across reorder. */
  id: string
  text: string
}

export type AboutPageMapDotVm = {
  /** Sanity array `_key` when present — stable across reorder. */
  id: string
  topPercent: number
  leftPercent: number
  label?: string
}

/** Alias for callers that expect the shorter name. */
export type AboutPageMapDot = AboutPageMapDotVm

export type AboutPageKpiVm = {
  /** Sanity array `_key` when present — stable across reorder. */
  id: string
  value: string
  label: string
  variant: AboutKpiVariant
}

/** Alias for callers that expect the shorter name. */
export type AboutPageKpi = AboutPageKpiVm

export type AboutPageContent = {
  introParagraphs: AboutTextBlockVm[]
  globalReachTitle: string
  globalReachParagraphs: AboutTextBlockVm[]
  mapImageSrc: string
  mapAlt: string
  mapDots: AboutPageMapDotVm[]
  kpis: AboutPageKpiVm[]
}

type AboutPageRaw = {
  introParagraphs?: Array<{_key?: string | null; text?: string | null} | null> | null
  globalReachTitle?: string | null
  globalReachParagraphs?: Array<{_key?: string | null; text?: string | null} | null> | null
  mapImage?: {
    alt?: string | null
    asset?: {url?: string | null} | null
  } | null
  mapDots?: Array<{
    _key?: string | null
    topPercent?: number | null
    leftPercent?: number | null
    label?: string | null
  } | null> | null
  kpis?: Array<{
    _key?: string | null
    value?: string | null
    label?: string | null
    variant?: string | null
  } | null> | null
}

const DEFAULT_MAP = '/assets/images/Flat-world-map-with-transparent-background.png'
const DEFAULT_MAP_ALT = 'World map showing Tawazon global presence'

const FALLBACK_TEXT_INTRO = [
  'Tawazon Chemical Co. LLC is a multinational organization with over three decades of experience. Headquartered in Dubai, the company manages a network of offices across Africa, the Middle East, the Subcontinent, and Southeast Asia, ensuring strong regional presence.',
  'It supplies specialty chemicals for Coatings, Construction, Inks, Plastics, Packaging, Fiberglass, Rubber, and Food.',
  'With strong global partnerships and an optimized supply chain, Tawazon ensures technical support, innovative solutions, and reliable service.',
] as const

const FALLBACK_TEXT_GLOBAL = [
  'With a global footprint spanning over eight offices and expertise across eight specialized business verticals',
  "Tawazon's team of more than 165 skilled professionals works collaboratively to provide tailored solutions that empower customers and drive progress across a wide range of focused industries.",
] as const

const FALLBACK_DOT_DEFS = [
  {id: 'map-dot-dubai', topPercent: 38, leftPercent: 58, label: 'Dubai'},
  {id: 'map-dot-india', topPercent: 42, leftPercent: 65, label: 'India'},
  {id: 'map-dot-kenya', topPercent: 52, leftPercent: 54, label: 'Kenya'},
  {id: 'map-dot-nigeria', topPercent: 48, leftPercent: 48, label: 'Nigeria'},
  {id: 'map-dot-sea', topPercent: 48, leftPercent: 72, label: 'Southeast Asia'},
  {id: 'map-dot-pakistan', topPercent: 38, leftPercent: 62, label: 'Pakistan'},
  {id: 'map-dot-bangladesh', topPercent: 42, leftPercent: 68, label: 'Bangladesh'},
  {id: 'map-dot-saudi', topPercent: 40, leftPercent: 55, label: 'Saudi Arabia'},
] satisfies AboutPageMapDotVm[]

const FALLBACK_KPIS: AboutPageKpiVm[] = [
  {id: 'kpi-fb-years', value: '30+', label: 'Years of experience', variant: 'primary'},
  {id: 'kpi-fb-offices', value: '8', label: 'Office(s) Worldwide', variant: 'secondary'},
  {id: 'kpi-fb-verticals', value: '8', label: 'Business Verticals', variant: 'outline'},
  {id: 'kpi-fb-countries', value: '51', label: 'Countries', variant: 'secondary'},
  {id: 'kpi-fb-customers', value: '1800+', label: 'Satisfied Customers', variant: 'secondary'},
  {id: 'kpi-fb-suppliers', value: '350+', label: 'Suppliers', variant: 'secondary'},
]

const FALLBACK: AboutPageContent = {
  introParagraphs: buildFallbackTextBlocks(FALLBACK_TEXT_INTRO, 'intro'),
  globalReachTitle: 'Global Reach, Local Expertise',
  globalReachParagraphs: buildFallbackTextBlocks(FALLBACK_TEXT_GLOBAL, 'reach'),
  mapImageSrc: DEFAULT_MAP,
  mapAlt: DEFAULT_MAP_ALT,
  mapDots: [...FALLBACK_DOT_DEFS],
  kpis: [...FALLBACK_KPIS],
}

function buildFallbackTextBlocks(lines: readonly string[], slug: string): AboutTextBlockVm[] {
  return lines.map((text, idx) => {
    const priorDup = lines.slice(0, idx).filter((t) => t === text).length
    const idSuffix = stableContentKey(text, priorDup)
    return {
      id: `${slug}-fb:${idSuffix}`,
      text,
    }
  })
}

function normalizeTextBlocks(
  raw: AboutPageRaw['introParagraphs'],
  fallback: readonly AboutTextBlockVm[],
  synthPrefix: string,
): AboutTextBlockVm[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    return [...fallback]
  }
  const out: AboutTextBlockVm[] = []
  for (let idx = 0; idx < raw.length; idx += 1) {
    const b = raw[idx]
    if (!b) continue
    const text = typeof b.text === 'string' ? b.text.trim() : ''
    if (!text) continue
    const priorSame = raw
      .slice(0, idx)
      .filter((x) => x && typeof x.text === 'string' && x.text.trim() === text).length
    const saneKey = b._key && typeof b._key === 'string' && b._key.trim() !== '' ? b._key.trim() : null
    const id =
      saneKey ?? `${synthPrefix}-${stableContentKey(text, priorSame)}`
    out.push({id, text})
  }
  return out.length ? out : [...fallback]
}

function normalizeDots(raw: AboutPageRaw['mapDots'], fallback: AboutPageMapDotVm[]): AboutPageMapDotVm[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    return fallback
  }
  const out: AboutPageMapDotVm[] = []
  for (let idx = 0; idx < raw.length; idx += 1) {
    const d = raw[idx]
    if (!d) continue
    const top = typeof d.topPercent === 'number' ? d.topPercent : Number(d.topPercent)
    const left = typeof d.leftPercent === 'number' ? d.leftPercent : Number(d.leftPercent)
    if (!Number.isFinite(top) || !Number.isFinite(left)) continue

    const label = d.label?.trim() || undefined
    const fingerprint = `${label ?? 'marker'}|${top}|${left}`
    const priorDup = raw
      .slice(0, idx)
      .filter(
        (x) =>
          x &&
          (x.label?.trim() || undefined) === label &&
          (typeof x.leftPercent === 'number' ? x.leftPercent : Number(x.leftPercent)) === left &&
          (typeof x.topPercent === 'number' ? x.topPercent : Number(x.topPercent)) === top,
      ).length

    const saneKey = d._key && typeof d._key === 'string' && d._key.trim() !== '' ? d._key.trim() : null
    const id = saneKey ?? `map-dot-${stableContentKey(fingerprint, priorDup)}`

    out.push({
      id,
      topPercent: Math.min(100, Math.max(0, top)),
      leftPercent: Math.min(100, Math.max(0, left)),
      label,
    })
  }
  return out.length ? out : fallback
}

function normalizeKpis(raw: AboutPageRaw['kpis'], fallback: AboutPageKpiVm[]): AboutPageKpiVm[] {
  if (!Array.isArray(raw) || raw.length === 0) {
    return fallback
  }
  const variants = new Set(['primary', 'secondary', 'outline'])
  const out: AboutPageKpiVm[] = []

  for (let idx = 0; idx < raw.length; idx += 1) {
    const k = raw[idx]
    if (!k) continue
    const value = k.value?.trim()
    const label = k.label?.trim()
    if (!value || !label) continue
    const variant = k.variant && variants.has(k.variant) ? k.variant : 'secondary'

    const priorDup = raw
      .slice(0, idx)
      .filter(
        (x) =>
          x &&
          x.value?.trim() === value &&
          x.label?.trim() === label &&
          (x.variant && variants.has(x.variant) ? x.variant : 'secondary') === variant,
      ).length

    const saneKey = k._key && typeof k._key === 'string' && k._key.trim() !== '' ? k._key.trim() : null
    const id =
      saneKey ??
      stableContentKey(`kpi:${value}|${label}|${variant}`, priorDup)

    out.push({
      id,
      value,
      label,
      variant: variant as AboutKpiVariant,
    })
  }
  return out.length ? out : fallback
}

function mergeContent(raw: AboutPageRaw | null): AboutPageContent {
  if (!raw) {
    return FALLBACK
  }

  const introBlocks = normalizeTextBlocks(raw.introParagraphs, FALLBACK.introParagraphs, 'intro')
  const reachBlocks = normalizeTextBlocks(raw.globalReachParagraphs, FALLBACK.globalReachParagraphs, 'reach')

  const mapUrl = raw.mapImage?.asset?.url?.trim()
  const mapAltFromRaw = raw.mapImage?.alt?.trim()

  return {
    introParagraphs: introBlocks,
    globalReachTitle: raw.globalReachTitle?.trim() || FALLBACK.globalReachTitle,
    globalReachParagraphs: reachBlocks,
    mapImageSrc: mapUrl || FALLBACK.mapImageSrc,
    mapAlt: mapUrl ? mapAltFromRaw || FALLBACK.mapAlt : FALLBACK.mapAlt,
    mapDots: normalizeDots(raw.mapDots, FALLBACK.mapDots),
    kpis: normalizeKpis(raw.kpis, FALLBACK.kpis),
  }
}

export async function getAboutPageContent(): Promise<AboutPageContent> {
  const raw = await sanityFetch<AboutPageRaw | null>(aboutPageQuery)
  return mergeContent(raw)
}
