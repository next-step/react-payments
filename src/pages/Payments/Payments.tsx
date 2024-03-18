import { AddCard, CardList, CardConfig, CardPayment } from './funnel';
import { Funnel } from './payments.context';
import { STEP } from './payments.constant';

export const Payments = () => {
  return (
    <Funnel>
      <Funnel.Step name={STEP.CARD_LIST}>
        <CardList />
      </Funnel.Step>
      <Funnel.Step name={STEP.ADD_CARD}>
        <AddCard />
      </Funnel.Step>
      <Funnel.Step name={STEP.CARD_CONFIG}>
        <CardConfig />
      </Funnel.Step>
      <Funnel.Step name={STEP.CARD_PAYMENT}>
        <CardPayment />
      </Funnel.Step>
    </Funnel>
  );
};
