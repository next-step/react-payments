import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { Validator } from '@/features/lib/Validator';
import { MAX_LENGTH_CARD_OWNER_NAME } from '@/features/card/constants/maxLength';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { HFlex } from '@/shared/components/atoms/HFlex';
import { Text } from '@/shared/components/atoms/Text';

interface Props {
  ownerName: CardInputInterface['ownerName'];
  onChange: (prop: 'ownerName', nextVal: CardInputInterface['ownerName']) => void;
}

const INPUT_ID = 'card-owner';

export const CardInputOwner = ({ ownerName, onChange }: Props) => {
  const onChangeOwner = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!Validator.checkIsValidLength(value, MAX_LENGTH_CARD_OWNER_NAME)) {
      return;
    }

    onChange('ownerName', value);
  };

  return (
    <VFlex className={'input-container'}>
      <HFlex className={'justify-between'}>
        <Label htmlFor={INPUT_ID}>{'카드 소유자 이름(선택)'}</Label>
        <Text className={'input-length-indicator'}>
          {ownerName.length} / {MAX_LENGTH_CARD_OWNER_NAME}
        </Text>
      </HFlex>
      <Input
        id={INPUT_ID}
        value={ownerName}
        type={'text'}
        placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
        onChange={onChangeOwner}
        maxLength={MAX_LENGTH_CARD_OWNER_NAME}
      />
    </VFlex>
  );
};
