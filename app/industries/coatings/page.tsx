import IndustryPage from '@/components/industry-page';
import { COATINGS_CONFIG } from '@/services/coatings';

export default function CoatingsPage() {
  return <IndustryPage config={COATINGS_CONFIG} />;
}
