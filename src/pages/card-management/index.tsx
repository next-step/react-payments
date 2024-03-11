import { CARD_REGISTRATION_STEPS } from '@/constants/stepConstants';
import { useStepper } from '@/hooks/useStepper';
import { CardInventoryPage } from '@/pages/card-inventory';
import { AddCardPage } from '@/pages/add-card';
import { CompleteAddPage } from '@/pages/complete-add';

export const CardManagement = () => {
  const { Stepper, Step } = useStepper(CARD_REGISTRATION_STEPS);

  return (
    <Stepper>
      <Step name={CARD_REGISTRATION_STEPS[0]}>
        <CardInventoryPage />
      </Step>
      <Step name={CARD_REGISTRATION_STEPS[1]}>
        <AddCardPage />
      </Step>
      <Step name={CARD_REGISTRATION_STEPS[2]}>
        <CompleteAddPage />
      </Step>
    </Stepper>
  );
};
