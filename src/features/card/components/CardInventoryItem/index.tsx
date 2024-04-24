import { MouseEventHandler, useState } from 'react';

import { Button } from '@/components/atoms/Button';
import { Text } from '@/components/atoms/Text';
import { VFlex } from '@/components/atoms/VFlex';
import { CardBox } from '@/features/card/components/CardBox';
import { CardChip } from '@/features/card/components/CardChip';
import { CardInfo } from '@/features/card/components/CardInfo';
import { CardNumber } from '@/features/card/components/CardNumber';
import { CARD_BOX_TYPE, CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';
import { useCard } from '@/features/card/providers/CardProvider';
import { CardInputInterface } from '@/features/card/types/cardTypes';

import { useCardDisplayValue } from '../../hooks/useCardDisplayValue';

interface Props {
  card: CardInputInterface;
  moveToEditPage: () => void;
}

export const CardInventoryItem = ({ card, moveToEditPage }: Props) => {
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const { setCurrentInput, deleteCard } = useCard();
  const { displayCardNumber, displayOwnerName, displayExpirationDate } = useCardDisplayValue({
    card,
  });

  const onClickItem = () => {
    setCurrentInput(card);
    moveToEditPage();
  };

  const onClickDelete: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation();

    if (confirm('등록한 카드가 삭제됩니다. 정말 삭제하시겠습니까?')) {
      deleteCard(card.cardNumber);
    }
  };

  return (
    <VFlex
      className="gap-2 flex-column-center cursor-pointer relative"
      onClick={onClickItem}
      onMouseEnter={() => setIsDeleteVisible(true)}
      onMouseLeave={() => setIsDeleteVisible(false)}
    >
      <CardBox type={CARD_BOX_TYPE.small}>
        <CardBox.Top>{card.companyName}</CardBox.Top>
        <CardBox.Middle>
          <CardChip size={CARD_CHIP_SIZE.small} />
        </CardBox.Middle>
        <CardBox.Bottom>
          <CardNumber cardNumber={displayCardNumber} />
          <CardInfo ownerName={displayOwnerName} expirationDateMMYY={displayExpirationDate} />
        </CardBox.Bottom>
      </CardBox>
      <Text className="card-nickname">{card.nickname}</Text>
      {isDeleteVisible && (
        <Button type="button" className="absolute delete-btn" onClick={onClickDelete}>
          x
        </Button>
      )}
    </VFlex>
  );
};
