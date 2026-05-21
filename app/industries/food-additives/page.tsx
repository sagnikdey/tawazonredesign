import { IndustryPageWithHeader } from '@/components/industry-page-with-header';
import { FOOD_ADDITIVES_CONFIG } from '@/services/food-additives';

export default async function FoodAdditivesPage() {
  return <IndustryPageWithHeader config={FOOD_ADDITIVES_CONFIG} />;
}
