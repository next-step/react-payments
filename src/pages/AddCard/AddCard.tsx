import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { useCardForm, useCardFormHandler } from '@/context/CardFormContext';
import { useEffect, useMemo } from 'react';

function AddCard() {
  const card = useCardForm();
  const { onReset } = useCardFormHandler();

  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner } = useMemo(() => card, [card]);

  useEffect(() => {
    return () => onReset();
  }, []);

  return (
    <Layout headerTitle="카드 추가" goBack="/">
      <Card
        cardCompany=""
        cardOwner={cardOwner}
        cardNumber={{
          cardNumber1,
          cardNumber2,
          cardNumber3,
          cardNumber4,
        }}
        expiration={{
          year,
          month,
        }}
      />
      <AddCardForm />
    </Layout>
  );
}

export default AddCard;
