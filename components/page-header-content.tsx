import {Badge} from '@/components/ui/badge'
import {CircleDot} from 'lucide-react'
import {cn} from '@/lib/utils'

export type PageHeaderContentProps = {
  badgeLabel: string
  heading: string
  className?: string
  badgeClassName?: string
}

export function PageHeaderContent({
  badgeLabel,
  heading,
  className,
  badgeClassName,
}: PageHeaderContentProps) {
  if (!badgeLabel && !heading) {
    return null
  }

  return (
    <div className={cn(className)}>
      {badgeLabel ? (
        <Badge variant="outline" className={cn('mb-8', badgeClassName)}>
          <CircleDot className="text-brand-accent" aria-hidden />
          {badgeLabel}
        </Badge>
      ) : null}
      {heading ? <h1>{heading}</h1> : null}
    </div>
  )
}
