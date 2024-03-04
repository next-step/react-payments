import { useReducer } from 'react';
import { Card } from '../../components';
import { CardExpiration, CardNumber, CardPassword, OwnerName, SecurityCode } from './components';
import { cardReducer, initialCard } from './reducer';

interface CardRegistration {
  onClickBack: () => void;
  onClickNext: () => void;
}

export default function CardRegistration({ onClickBack, onClickNext }: CardRegistration) {
  const [card, cardDispatch] = useReducer(cardReducer, initialCard);

  return (
    <>
      <div className="app">
        <div className="flex-align-center g-16">
          <div onClick={onClickBack}>
            <span>{'<'}</span>
          </div>
          <h2 className="page-title">카드 추가</h2>
        </div>
        <Card ownerName={card.ownerName} expiration={{ month: card.expiration.month, year: card.expiration.year }} />
        <CardNumber cardNumber={card.cardNumber} cardNumberDispatch={cardDispatch} />
        <CardExpiration expiration={card.expiration} cardExpirationDispatch={cardDispatch} />
        <OwnerName ownerName={card.ownerName} ownerNameDispatch={cardDispatch} />
        <SecurityCode securityCode={card.securityCode} securityCodeDispatch={cardDispatch} />
        <CardPassword cardPassword={card.cardPassword} cardPasswordDispatch={cardDispatch} />
        <div className="button-box" onClick={onClickNext}>
          <span className="button-text">다음</span>
        </div>
      </div>
    </>
  );
}
