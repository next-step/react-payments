import { createFunnel } from '@/modules/funnel/Funnel';
import { PaymentsStep } from './payments.type';
import { STEP } from './payments.constant';

export const { Funnel, useFunnel: usePaymentsFunnel } =
  createFunnel<PaymentsStep>({
    initialStep: STEP.INITIAL_STEP,
  });
