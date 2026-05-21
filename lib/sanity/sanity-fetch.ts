const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 'cy0u4akg'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production'
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '2024-01-01'

function getSanityQueryUrl(): string {
  const subdomain =
    process.env.NODE_ENV === 'production' ? `${projectId}.apicdn.sanity.io` : `${projectId}.api.sanity.io`
  return `https://${subdomain}/v${apiVersion}/data/query/${dataset}`
}

/** Public GROQ over HTTP — avoids bundling `@sanity/client` in Next/webpack. */
export async function sanityFetch<T>(query: string, params: Record<string, unknown> = {}): Promise<T | null> {
  try {
    const res = await fetch(getSanityQueryUrl(), {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({query, params}),
      next: {revalidate: 60},
    })
    if (!res.ok) return null
    const json: {result?: T} = await res.json()
    return json.result ?? null
  } catch {
    return null
  }
}
