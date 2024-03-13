import { useContext, useState } from 'react';

import CardBox from '../CardBox';
import Card from '../Card';
import Button from '../card-add/ClickableLink';
import Input from '../Input';

import { CardContext } from '../../context/CardContext';

import updateValidValue from '../../utils/updateValidValue';
import { CARD_ALIAS_LIMIT } from '../../constants/cardLimit';

export default function CompletedCard() {
  const [cardAlias, setCardAlias] = useState('');

  const { cardState } = useContext(CardContext);

  console.log(cardState);
  if (!cardState) {
    return;
  }

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

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">카드등록이 완료되었습니다.</h1>
        </div>
        <CardBox>
          <Card
            variant="big"
            cardNumber={cardState.cardNumber}
            ownerName={cardState.ownerName}
            expirationDate={cardState.expirationDate}
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
        <Button className="mt-55" location="/" text="다음" />
      </div>
    </div>
  );
}
