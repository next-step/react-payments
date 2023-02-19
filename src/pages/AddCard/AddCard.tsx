import { Card } from '@/components/Common';
import AddCardForm from '@/components/Form/AddCardForm';
import { CardInformation } from '@/types';
import { ChangeEvent, FormEvent } from 'react';

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
        <div className="app">
          <h2 className="page-title"> 카드 추가</h2>
          <div className="card-box">
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
          </div>
          <AddCardForm cardInformation={cardInformation} onChange={onChange} onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

export default AddCard;
