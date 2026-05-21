import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { COATINGS_CONFIG } from '@/services/coatings';

export default async function CoatingsPage() {
  return <IndustryPageWithHeader config={COATINGS_CONFIG} />;
}
