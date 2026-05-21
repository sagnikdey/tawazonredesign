import KpiBox from '@/components/kpi-box'
import type {AboutPageKpi} from '@/lib/sanity/about-page'

type KpiStatGridProps = {
  kpis: AboutPageKpi[]
  className?: string
}

export function KpiStatGrid({kpis, className}: KpiStatGridProps) {
  return (
    <div className={className}>
      <div className="grid grid-cols-3 gap-3 justify-end">
        {kpis.map((kpi) => (
          <KpiBox
            key={kpi.id}
            value={kpi.value}
            label={kpi.label}
            variant={kpi.variant}
          />
        ))}
      </div>
    </div>
  )
}
