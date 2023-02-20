import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import Layout from '@/components/Layout';
import { CardInformation } from '@/types';
import type { ChangeEvent, FormEvent } from 'react';

type Props = {
  cardInformation: CardInformation;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

function AddCard({ cardInformation, onChange, onSubmit }: Props) {
  const { cardNumber1, cardNumber2, cardNumber3, cardNumber4, year, month, cardOwner } = cardInformation;
  return (
    <div>
      <div className="root">
        <Layout headerTitle="카드 추가" goBack="/">
          {
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
              <AddCardForm cardInformation={cardInformation} onChange={onChange} onSubmit={onSubmit} />
            </>
          }
        </Layout>
      </div>
    </div>
  );
}

export default AddCard;
