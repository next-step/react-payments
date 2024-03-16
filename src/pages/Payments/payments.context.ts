import { createFunnel } from '@pengoose/funnel';
import { CardFunnelData, PaymentsStep } from './payments.type';
import { STEP } from './payments.constant';

export const initialData: CardFunnelData = {
  cardList: [],
  tempCard: null,
};

export const Funnel = createFunnel<PaymentsStep, typeof initialData>({
  initialStep: STEP.INITIAL_STEP,
  initialData,
});
