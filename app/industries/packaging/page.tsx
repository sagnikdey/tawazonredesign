import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { PACKAGING_CONFIG } from '@/services/packaging';

export default async function PackagingPage() {
  return <IndustryPageWithHeader config={PACKAGING_CONFIG} />;
}
