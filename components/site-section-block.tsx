import Image from 'next/image'
import Link from 'next/link'
import {Icon} from '@iconify/react'
import {SectionHeader} from '@/components/section-header'
import {SectionHighlightList} from '@/components/section-highlight-list'
import {Separator} from '@/components/ui/separator'
import {Button} from '@/components/ui/button'
import {siteSectionSurfaceClass} from '@/lib/section-appearance'
import type {SiteSectionContent} from '@/lib/sanity/site-section'

type SiteSectionBlockProps = {
  data: SiteSectionContent
  className?: string
}

/** Renders a resolved `siteSection` (from a reference or from `getSiteSectionContent`). */
export function SiteSectionBlock({data, className}: SiteSectionBlockProps) {
  const cta = data.cta ? (
    <Button variant="default" asChild className="group">
      <Link
        href={data.cta.url}
        target={data.cta.openInNewTab ? '_blank' : undefined}
        rel={data.cta.openInNewTab ? 'noopener noreferrer' : undefined}
      >
        {data.cta.label}
        <Icon
          icon="solar:arrow-right-linear"
          className="transition-transform group-hover:translate-x-1"
          width={16}
          strokeWidth={1.5}
        />
      </Link>
    </Button>
  ) : null

  return (
    <section
      id={data.key}
      data-section-key={data.key}
      data-section-variant={data.variant}
      className={siteSectionSurfaceClass(data.variant, className)}
    >
      <div className="px-6 md:px-12 max-w-[1400px] mx-auto">
        <SectionHeader
          badgeLabel={data.header.badgeLabel}
          title={data.header.title}
          lead={data.header.lead}
          actions={cta}
          className="mb-8"
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-12">
          <div>
            <p className="text-muted-foreground mb-6 max-w-lg leading-relaxed">{data.bodyText}</p>
            <Separator />
            <SectionHighlightList items={data.highlights} />
          </div>

          <div>
            <div className="glass-card-dark p-4">
              <Image
                src={data.mediaSrc}
                alt={data.mediaAlt}
                width={500}
                height={500}
                className="media-dim h-full w-full rounded-sm object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
