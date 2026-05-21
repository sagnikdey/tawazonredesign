import {SiteSectionBlock} from '@/components/site-section-block'
import {getSiteSectionContent} from '@/lib/sanity/site-section'

type SiteSectionProps = {
  /** Must match `siteSection.key` in Sanity (e.g. about-ghobash). */
  sectionKey: string
  className?: string
}

/**
 * Fetches a `siteSection` document by key and renders it.
 * Prefer `PageModules` + Studio `sitePage` when the section is part of a composed page.
 */
export async function SiteSection({sectionKey, className}: SiteSectionProps) {
  const data = await getSiteSectionContent(sectionKey)
  if (!data) {
    return null
  }
  return <SiteSectionBlock data={data} className={className} />
}
