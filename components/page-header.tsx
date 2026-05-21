import type {ReactNode} from 'react'
import {PageHeaderContent} from '@/components/page-header-content'
import {fetchPageHeaderBySlug} from '@/lib/sanity/fetch-page-header'
import {resolvePageHeaderFields} from '@/lib/sanity/page-header-defaults'
import type {IndustryConfig} from '@/services/industries-types'
import {cn} from '@/lib/utils'

type PageHeaderProps = {
  /** Sanity `pageHeader.slug` value, e.g. `about-us`, `industry-coatings` */
  slug: string
  className?: string
  badgeClassName?: string
  children?: ReactNode
  /** When `slug` is `industry-*`, pass config for fallback badge/heading. */
  industry?: IndustryConfig
}

export async function PageHeader({slug, className, badgeClassName, children, industry}: PageHeaderProps) {
  const data = await fetchPageHeaderBySlug(slug)
  const {badgeLabel, heading} = resolvePageHeaderFields(slug, data, {industry})

  if (!badgeLabel && !heading) {
    return null
  }

  return (
    <header className={cn(className)}>
      <PageHeaderContent badgeLabel={badgeLabel} heading={heading} badgeClassName={badgeClassName} />
      {children}
    </header>
  )
}
