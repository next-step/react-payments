import { useState } from 'react';

import CardBox from '../CardBox';
import Card from '../Card';
import ClickableLink from '../card-add/ClickableLink';
import Input from '../Input';

import { useCardContext } from '../hooks/useCardContext';
import { useCardsContext } from '../hooks/useCardsContext';

import updateValidValue from '../../utils/updateValidValue';

import { CARD_ALIAS_LIMIT } from '../../constants/cardLimit';

export default function CompletedCard() {
  const [cardAlias, setCardAlias] = useState('');

  const { card } = useCardContext();
  const { cards, addCardInList } = useCardsContext();

  const handleChangeCardAlias = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;

    console.log(card);

    updateValidValue({
      limit: CARD_ALIAS_LIMIT,
      setter: setCardAlias,
      value,
      isMonth: false,
      isNumber: false,
    });
  };

  const handleClickButton = () => {
    const newCardAlias = cardAlias || card.cardCompany;

    addCardInList({
      ...card,
      cardAlias: newCardAlias,
    });
    console.log(card);
    console.log(cards);
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">카드등록이 완료되었습니다.</h1>
        </div>
        <CardBox>
          <Card
            variant="big"
            cardNumber={card.cardNumber}
            ownerName={card.ownerName}
            expirationDate={card.expirationDate}
          />
        </CardBox>
        <div className="input-container flex-center w-100">
          <Input
            variant="underline"
            className="w-75"
            type="text"
            placeholder="카드 별칭 (선택)"
            value={cardAlias}
            onChange={handleChangeCardAlias}
          />
        </div>
        <ClickableLink
          className="mt-55"
          location="/"
          text="다음"
          disable={false}
          isClick={true}
          onClick={handleClickButton}
        />
      </div>
    </div>
  );
}
