export const CARD_REGISTRATION_STEPS = ['inventory', 'registration', 'complete'] as const;

export type TSteps = typeof CARD_REGISTRATION_STEPS;
