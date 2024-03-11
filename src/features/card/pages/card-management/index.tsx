import { CARD_REGISTRATION_STEPS } from '@/constants/stepConstants';
import { useStepper } from '@/hooks/useStepper';
import { CardInventoryPage } from '@/features/card/pages/card-inventory';
import { AddCardPage } from '@/features/card/pages/add-card';
import { CompleteAddPage } from '@/features/card/pages/complete-add';

export const CardManagement = () => {
  const { Stepper, Step, setStep } = useStepper(CARD_REGISTRATION_STEPS);

  return (
    <Stepper>
      <Step name={CARD_REGISTRATION_STEPS[0]}>
        <CardInventoryPage
          onNext={() => {
            setStep(CARD_REGISTRATION_STEPS[1]);
          }}
        />
      </Step>
      <Step name={CARD_REGISTRATION_STEPS[1]}>
        <AddCardPage
          onPrev={() => {
            setStep(CARD_REGISTRATION_STEPS[0]);
          }}
          onNext={() => {
            setStep(CARD_REGISTRATION_STEPS[2]);
          }}
        />
      </Step>
      <Step name={CARD_REGISTRATION_STEPS[2]}>
        <CompleteAddPage
          onNext={() => {
            setStep(CARD_REGISTRATION_STEPS[0]);
          }}
        />
      </Step>
    </Stepper>
  );
};
