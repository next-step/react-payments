import { Button } from '@/components/atoms/Button';
import { Input } from '@/components/atoms/Input';
import { Text } from '@/components/atoms/Text';
import { AppLayout } from '@/components/layout/AppLayout';
import { RootLayout } from '@/components/layout/RootLayout';
import { CardBox } from '@/features/card/components/CardBox';
import { CardChip } from '@/features/card/components/CardChip';
import { CardInfo } from '@/features/card/components/CardInfo';
import { CardNumber } from '@/features/card/components/CardNumber';
import { CARD_BOX_TYPE, CARD_CHIP_SIZE } from '@/features/card/constants/cardShape';
import { useCard } from '@/features/card/providers/CardProvider';

import { useCardDisplayValue } from '../../hooks/useCardDisplayValue';
import { useChangeCardNickname } from '../../hooks/useChangeCardNickname';

interface Props {
  onNext: () => void;
}

export const CompleteAddPage = ({ onNext }: Props) => {
  const { input, editCard, resetInput } = useCard();
  const { displayCardNumber, displayOwnerName, displayExpirationDate } = useCardDisplayValue({
    card: input,
  });

  const { onChangeNickname } = useChangeCardNickname();

  const submitCardNickname = () => {
    const isValid = input.nickname.length <= 10;
    if (!isValid) {
      alert('최대 길이는 10자리입니다.');
      return;
    }

    const nickname = input.nickname || input.companyName;
    editCard({ cardNumber: input.cardNumber, card: { ...input, nickname } });
    resetInput();
    onNext();
  };

  return (
    <RootLayout>
      <AppLayout className={'flex-column-center'}>
        <div className="flex-center">
          <h2 className="page-title mb-10">카드등록이 완료되었습니다.</h2>
        </div>
        <CardBox type={CARD_BOX_TYPE.big}>
          <CardBox.Top>
            <Text className="card-text__big">{input.companyName}</Text>
          </CardBox.Top>
          <CardBox.Middle>
            <CardChip size={CARD_CHIP_SIZE.big} />
          </CardBox.Middle>
          <CardBox.Bottom>
            <CardNumber cardNumber={displayCardNumber} isBig />
            <CardInfo
              ownerName={displayOwnerName}
              expirationDateMMYY={displayExpirationDate}
              textClassName={'card-text__big'}
            />
          </CardBox.Bottom>
        </CardBox>
        <div className="input-container flex-center w-100">
          <Input
            value={input.nickname}
            type={'text'}
            className={'input-underline w-75'}
            placeholder={'카드 별칭 (선택)'}
            onChange={onChangeNickname}
          />
        </div>
        <Button type={'button'} onClick={submitCardNickname} className={'button-box mt-50'}>
          <Text className={'button-text'}>{'확인'}</Text>
        </Button>
      </AppLayout>
    </RootLayout>
  );
};
