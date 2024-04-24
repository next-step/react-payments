import { CardBox } from '@/features/card/components/CardBox';
import { CardChip } from '@/features/card/components/CardChip';
import { CardInfo } from '@/features/card/components/CardInfo';
import { CardNumber } from '@/features/card/components/CardNumber';
import { CARD_BOX_TYPE, CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';
import { useCardDisplayValue } from '@/features/card/hooks/useCardDisplayValue';
import { CardInputInterface } from '@/features/card/types/cardTypes';

interface Props {
  card: CardInputInterface;
}

export const CardInputDisplay = ({ card }: Props) => {
  const { companyName } = card;
  const { displayCardNumber, displayOwnerName, displayExpirationDate } = useCardDisplayValue({
    card,
  });

  return (
    <CardBox type={CARD_BOX_TYPE.empty}>
      <CardBox.Top>{companyName}</CardBox.Top>
      <CardBox.Middle>
        <CardChip size={CARD_CHIP_SIZE.small} />
      </CardBox.Middle>
      <CardBox.Bottom>
        <CardNumber cardNumber={displayCardNumber} />
        <CardInfo ownerName={displayOwnerName} expirationDateMMYY={displayExpirationDate} />
      </CardBox.Bottom>
    </CardBox>
  );
};
