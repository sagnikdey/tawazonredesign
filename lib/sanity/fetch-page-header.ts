import {sanityFetch} from './sanity-fetch'
import {pageHeaderBySlugQuery} from './queries'
import type {PageHeaderPayload} from './types'

export async function fetchPageHeaderBySlug(slug: string): Promise<PageHeaderPayload | null> {
  if (!slug) return null
  return sanityFetch<PageHeaderPayload | null>(pageHeaderBySlugQuery, {slug})
}
