import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { RUBBER_CONFIG } from '@/services/rubber';

export default async function RubberPage() {
  return <IndustryPageWithHeader config={RUBBER_CONFIG} />;
}
