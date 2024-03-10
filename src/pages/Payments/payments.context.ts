import { createFunnel } from '@/modules/funnel/Funnel';
import { CardFunnelData, PaymentsStep } from './payments.type';
import { STEP } from './payments.constant';

export const initialData: CardFunnelData = {
  cardList: [],
  tempCard: null,
};

export const { Funnel, useFunnel: usePaymentsFunnel } = createFunnel<
  PaymentsStep,
  typeof initialData
>({
  initialStep: STEP.INITIAL_STEP,
  initialData,
});
