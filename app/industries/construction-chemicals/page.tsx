import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { CONSTRUCTION_CHEMICALS_CONFIG } from '@/services/construction-chemicals';

export default async function ConstructionChemicalsPage() {
  return <IndustryPageWithHeader config={CONSTRUCTION_CHEMICALS_CONFIG} />;
}
