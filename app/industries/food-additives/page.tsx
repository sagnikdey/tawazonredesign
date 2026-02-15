import IndustryPage from '@/components/industry-page';
import { FOOD_ADDITIVES_CONFIG } from '@/services/food-additives';

export default function FoodAdditivesPage() {
  return <IndustryPage config={FOOD_ADDITIVES_CONFIG} />;
}
