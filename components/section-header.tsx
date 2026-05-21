import type {ReactNode} from 'react'
import {Badge} from '@/components/ui/badge'
import {CircleDot} from 'lucide-react'
import {cn} from '@/lib/utils'

export type SectionHeaderProps = {
  badgeLabel?: string
  title: string
  lead?: string
  className?: string
  badgeClassName?: string
  /** Shown on the end of the row on larger screens (e.g. primary button). */
  actions?: ReactNode
}

/**
 * Reusable block: optional badge, section title (h2), optional lead, optional actions.
 * Use with CMS `sectionHeader` objects or standalone.
 */
export function SectionHeader({
  badgeLabel,
  title,
  lead,
  className,
  badgeClassName,
  actions,
}: SectionHeaderProps) {
  return (
    <div className={cn('flex flex-col gap-6 md:flex-row md:items-end md:justify-between', className)}>
      <div className="max-w-xl">
        {badgeLabel ? (
          <Badge variant="outline" className={cn('mb-8', badgeClassName)}>
            <CircleDot className="text-brand-accent" aria-hidden />
            {badgeLabel}
          </Badge>
        ) : null}
        <h2>{title}</h2>
        {lead ? <p className="mt-4 text-base">{lead}</p> : null}
      </div>
      {actions ? <div className="shrink-0">{actions}</div> : null}
    </div>
  )
}
