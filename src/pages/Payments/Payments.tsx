import { AddCard, CardList, AddCardComplete, CardPayment } from './funnel';
import { PaymentsFunnel } from './paments.context';
import { STEP } from './payments.constant';

export const Payments = () => {
  return (
    <PaymentsFunnel initialStep={STEP.INITIAL_STEP}>
      <PaymentsFunnel.Step name={STEP.CARD_LIST}>
        <CardList />
      </PaymentsFunnel.Step>
      <PaymentsFunnel.Step name={STEP.ADD_CARD}>
        <AddCard />
      </PaymentsFunnel.Step>
      <PaymentsFunnel.Step name={STEP.ADD_CARD_COMPLETE}>
        <AddCardComplete />
      </PaymentsFunnel.Step>
      <PaymentsFunnel.Step name={STEP.CARD_PAYMENT}>
        <CardPayment />
      </PaymentsFunnel.Step>
    </PaymentsFunnel>
  );
};
