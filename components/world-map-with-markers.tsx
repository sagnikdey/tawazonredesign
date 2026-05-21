import Image from 'next/image'
import type {AboutPageMapDot} from '@/lib/sanity/about-page'
import {cn} from '@/lib/utils'

type WorldMapWithMarkersProps = {
  src: string
  alt: string
  dots: AboutPageMapDot[]
  className?: string
}

export function WorldMapWithMarkers({src, alt, dots, className}: WorldMapWithMarkersProps) {
  return (
    <div className={cn('relative w-full h-[300px] md:h-[400px]', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-contain opacity-60"
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={false}
      />
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="bg-brand-accent shadow-brand-dot pointer-events-none absolute z-10 h-3 w-3 animate-pulse rounded-full"
          style={{top: `${dot.topPercent}%`, left: `${dot.leftPercent}%`}}
          title={dot.label || undefined}
          aria-hidden={!dot.label}
          aria-label={dot.label || undefined}
        />
      ))}
    </div>
  )
}
