import { ChangeEvent, useState } from 'react';

import Card from '../Card';
import Header from '../Header';
import CardFormDomain from '../../domains/cardFormDomain';

type Props = {
  onClickGoBack: () => void
  cardFormDomain: CardFormDomain
}

function CardForm({ onClickGoBack, cardFormDomain }: Props) {
  const [cardNumber, setCardNumber] = useState(cardFormDomain.cardNumber);

  const handleChangeCardNumber = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    cardFormDomain.changeCardNumber(value);
    setCardNumber(cardFormDomain.cardNumber);
  };

  return (
    <>
      <Header onClickGoBack={onClickGoBack} />
      <Card
        name=""
        expireDate=""
        company=""
        cardNumber={cardNumber}
      />
      <label htmlFor="card-number">카드 번호</label>
      <input id="card-number" type="text" onChange={handleChangeCardNumber} value={cardNumber} />
    </>
  );
}

export default CardForm;
