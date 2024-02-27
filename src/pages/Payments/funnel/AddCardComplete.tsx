import { usePaymentsFunnel } from '../payments.context';
import { STEP } from '../payments.constant';
import { PaymentsStepKey } from '../payments.type';

export const AddCardComplete = () => {
  const { setStep } = usePaymentsFunnel();

  return (
    <div>
      <h1>Add Card Complete</h1>
      {Object.keys(STEP).map((key) => {
        return (
          <button
            key={key}
            onClick={() => setStep(STEP[key as PaymentsStepKey])}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};
