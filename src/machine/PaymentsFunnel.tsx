import { useMachine } from '@xstate/react';
import { paymentMachine } from './paymentsMachine';
import {
  AddCard,
  AddCardComplete,
  CardList,
  CardPayment,
} from '@/pages/Payments/funnel';
import { STEP } from '@/pages/Payments/payments.constant';

export const PaymentsFunnel = () => {
  const [state] = useMachine(paymentMachine);

  return (
    <div>
      {state.matches(STEP.CARD_LIST) && <CardList />}
      {state.matches(STEP.ADD_CARD) && <AddCard />}
      {state.matches(STEP.ADD_CARD_COMPLETE) && <AddCardComplete />}
      {state.matches(STEP.CARD_PAYMENT) && <CardPayment />}
    </div>
  );
};
