import IndustryPage from '@/components/industry-page';
import { PACKAGING_CONFIG } from '@/services/packaging';

export default function PackagingPage() {
  return <IndustryPage config={PACKAGING_CONFIG} />;
}
