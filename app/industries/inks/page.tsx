import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { INKS_CONFIG } from '@/services/inks';

export default async function InksPage() {
  return <IndustryPageWithHeader config={INKS_CONFIG} />;
}
