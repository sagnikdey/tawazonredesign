import IndustryPage from '@/components/industry-page'
import {fetchPageHeaderBySlug} from '@/lib/sanity/fetch-page-header'
import {resolvePageHeaderFields} from '@/lib/sanity/page-header-defaults'
import type {IndustryConfig} from '@/services/industries-types'

export async function IndustryPageWithHeader({config}: {config: IndustryConfig}) {
  const slug = `industry-${config.slug}`
  const data = await fetchPageHeaderBySlug(slug)
  const header = resolvePageHeaderFields(slug, data, {industry: config})
  return <IndustryPage config={config} header={header} />
}
