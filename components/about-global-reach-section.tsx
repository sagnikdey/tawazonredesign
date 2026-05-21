import {PageHeader} from '@/components/page-header'
import {KpiStatGrid} from '@/components/kpi-stat-grid'
import {WorldMapWithMarkers} from '@/components/world-map-with-markers'
import {getAboutPageContent} from '@/lib/sanity/about-page'

export async function AboutGlobalReachSection() {
  const content = await getAboutPageContent()

  return (
    <section>
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-6">
            <PageHeader slug="about-us" />
            <div className="mt-6 space-y-4 text-base leading-relaxed">
              {content.introParagraphs.map(({id, text}) => (
                <p key={id}>{text}</p>
              ))}
            </div>

            <h3 className="mt-10">{content.globalReachTitle}</h3>
            <div className="text-muted-foreground mt-4 space-y-4 text-base leading-relaxed">
              {content.globalReachParagraphs.map(({id, text}) => (
                <p key={id}>{text}</p>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 relative flex flex-col justify-between h-full">
            <div className="relative">
              <WorldMapWithMarkers src={content.mapImageSrc} alt={content.mapAlt} dots={content.mapDots} />
            </div>
            <KpiStatGrid kpis={content.kpis} className="mt-6" />
          </div>
        </div>
      </div>
    </section>
  )
}
