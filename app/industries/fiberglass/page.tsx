import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { FIBERGLASS_CONFIG } from '@/services/fiberglass';

export default async function FiberglassPage() {
  return <IndustryPageWithHeader config={FIBERGLASS_CONFIG} />;
}
