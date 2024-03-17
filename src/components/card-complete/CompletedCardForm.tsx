import { useState } from 'react';
import CardBox from '../CardBox';
import Card from '../Card';
import ClickableLink from '../card-add/ClickableLink';
import Input from '../Input';
import { useCardsContext } from '../hooks/useCardsContext';
import updateValidValue from '../../utils/updateValidValue';
import { CARD_ALIAS_LIMIT } from '../../constants/cardLimit';

export default function CompletedCard() {
  const url = window.location.href;
  const parts = url.split('/');
  const lastPart = parts[parts.length - 1];
  const id = parseInt(lastPart, 10);

  const { cards, getCardInList, editCardInList, deleteCardInList } =
    useCardsContext();
  const card = getCardInList(id);

  console.log(cards);
  console.log(card);
  console.log(id);

  const [cardAlias, setCardAlias] = useState(card.cardAlias);

  const handleChangeCardAlias = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    updateValidValue({
      limit: CARD_ALIAS_LIMIT,
      setter: setCardAlias,
      value,
      isMonth: false,
      isNumber: false,
    });
  };

  const handleClickEdit = () => {
    const newCardAlias = cardAlias || card.cardCompany;

    editCardInList({
      ...card,
      cardAlias: newCardAlias,
    });

    console.log(card);
  };

  const handleClickDelete = () => {
    console.log(card.id);
    deleteCardInList(card.id);
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">카드 등록이 완료되었습니다.</h1>
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
          onClick={handleClickEdit}
        />
        <ClickableLink
          className="mt-5"
          location="/"
          text="삭제"
          disable={false}
          isClick={true}
          onClick={handleClickDelete}
        />
      </div>
    </div>
  );
}
