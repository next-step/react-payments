import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { useCardForm } from '@/context/CardFormContext';
import { useMemo } from 'react';

function AddCard() {
  const card = useCardForm();

  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner } = useMemo(() => card, [card]);

  return (
    <div>
      <div className="root">
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
      </div>
    </div>
  );
}

export default AddCard;
