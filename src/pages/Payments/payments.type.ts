import { STEP } from './payments.constant';

export type PaymentsStep = (typeof STEP)[keyof typeof STEP];
export type PaymentsStepKey = keyof typeof STEP;
