import {AboutGlobalReachSection} from '@/components/about-global-reach-section'
import Team from '@/components/team'
import {SiteSectionBlock} from '@/components/site-section-block'
import {getResolvedSitePageModules} from '@/lib/sanity/site-page'

type PageModulesProps = {
  /** Same value as `sitePage.slug` in Sanity (e.g. about-us). */
  pageSlug: string
}

/**
 * Renders all modules for a `sitePage` document in order.
 * Create the page under Studio → Pages (compose sections), add blocks with “Add item”.
 */
export async function PageModules({pageSlug}: PageModulesProps) {
  const modules = await getResolvedSitePageModules(pageSlug)
  let teamBlockIndex = 0

  return (
    <>
      {modules.map((m) => {
        if (m.kind === 'aboutGlobalReach') {
          return <AboutGlobalReachSection key={m.reactKey} />
        }
        if (m.kind === 'team') {
          const teamAnchorId = teamBlockIndex === 0 ? 'team' : undefined
          teamBlockIndex += 1
          return (
            <section key={m.reactKey} id={teamAnchorId}>
              <Team />
            </section>
          )
        }
        return <SiteSectionBlock key={m.reactKey} data={m.data} />
      })}
    </>
  )
}
