import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { useCardForm } from '@/context/CardFormContext';

import type { FormEvent } from 'react';

type Props = {
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

function AddCard({ onSubmit }: Props) {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner } = useCardForm();
  return (
    <div>
      <div className="root">
        <Layout headerTitle="카드 추가" goBack="/">
          <>
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
            <AddCardForm onSubmit={onSubmit} />
          </>
        </Layout>
      </div>
    </div>
  );
}

export default AddCard;
