import { getFunnel } from '@/components/funnel/Funnel';
import { PaymentsStep } from './payments.type';
import { STEP } from './payments.constant';

export const { Funnel, useFunnel: usePaymentsFunnel } = getFunnel<PaymentsStep>(
  {
    initialState: STEP.INITIAL_STEP,
  }
);
