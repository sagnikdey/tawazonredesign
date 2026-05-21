import {CircleCheckBig} from 'lucide-react'
import {cn, stableKeyAtIndex} from '@/lib/utils'

type SectionHighlightListProps = {
  items: string[]
  className?: string
}

export function SectionHighlightList({items, className}: SectionHighlightListProps) {
  if (!items.length) {
    return null
  }

  return (
    <div className={cn('flex flex-col items-start gap-6 py-7 text-base leading-relaxed', className)}>
      {items.map((text, i) => (
        <div key={stableKeyAtIndex(items, i)} className="flex items-start gap-3">
          <CircleCheckBig className="text-brand-strong mt-0.5 shrink-0" width={24} height={24} aria-hidden />
          <p className="font-medium">{text}</p>
        </div>
      ))}
    </div>
  )
}
