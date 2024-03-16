import { STEP } from '../payments.constant';
import { Funnel } from '../payments.context';
import { PaymentsStepKey } from '../payments.type';

export const CardPayment = () => {
  const { setStep } = Funnel.useContext();

  return (
    <div>
      <h1>Card Payment</h1>
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
