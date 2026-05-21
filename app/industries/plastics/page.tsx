import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { PLASTICS_CONFIG } from '@/services/plastics';

export default async function PlasticsPage() {
  return <IndustryPageWithHeader config={PLASTICS_CONFIG} />;
}
