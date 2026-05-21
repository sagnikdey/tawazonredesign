import {sitePageBySlugQuery} from './queries'
import {sanityFetch} from './sanity-fetch'
import {
  getSiteSectionFallback,
  siteSectionDerefToContent,
  type SiteSectionContent,
  type SiteSectionRaw,
} from './site-section'

export type ResolvedPageModule =
  | {kind: 'aboutGlobalReach'; reactKey: string}
  | {kind: 'team'; reactKey: string}
  | {kind: 'siteSection'; reactKey: string; data: SiteSectionContent}

type RawPageModule = {
  _key?: string
  _type?: string
  section?: SiteSectionRaw | null
}

type SitePageRaw = {
  modules?: RawPageModule[] | null
}

function resolveModules(modules: RawPageModule[]): ResolvedPageModule[] {
  const out: ResolvedPageModule[] = []
  for (const m of modules) {
    const reactKey = m._key && m._key.length > 0 ? m._key : `mod-${out.length}`
    if (m._type === 'pageModuleAboutGlobalReach') {
      out.push({kind: 'aboutGlobalReach', reactKey})
    } else if (m._type === 'pageModuleTeam') {
      out.push({kind: 'team', reactKey})
    } else if (m._type === 'pageModuleSiteSection') {
      const data = siteSectionDerefToContent(m.section ?? null)
      if (data) {
        out.push({kind: 'siteSection', reactKey, data})
      }
    }
  }
  return out
}

function defaultAboutUsModules(): ResolvedPageModule[] {
  const ghobash = getSiteSectionFallback('about-ghobash')
  const out: ResolvedPageModule[] = [
    {kind: 'aboutGlobalReach', reactKey: 'default-about-global'},
    ...(ghobash ? [{kind: 'siteSection' as const, reactKey: 'default-ghobash', data: ghobash}] : []),
    {kind: 'team', reactKey: 'default-team'},
  ]
  return out
}

/**
 * Ordered sections for a route slug (matches `sitePage.slug` in Sanity).
 * Falls back to a built-in About layout when slug is `about-us` and no document exists yet.
 */
export async function getResolvedSitePageModules(pageSlug: string): Promise<ResolvedPageModule[]> {
  const doc = await sanityFetch<SitePageRaw | null>(sitePageBySlugQuery, {slug: pageSlug})
  if (!doc?.modules?.length) {
    return pageSlug === 'about-us' ? defaultAboutUsModules() : []
  }
  return resolveModules(doc.modules)
}
