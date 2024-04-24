import { ChangeEvent } from 'react';

import { HFlex } from '@/components/atoms/HFlex';
import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { Text } from '@/components/atoms/Text';
import { VFlex } from '@/components/atoms/VFlex';
import { MAX_LENGTH_CARD_OWNER_NAME } from '@/features/card/constants/maxLength';
import { CardInputInterface } from '@/features/card/types/cardTypes';

interface Props {
  ownerName: CardInputInterface['ownerName'];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const INPUT_ID = 'card-owner';

export const CardInputOwner = ({ ownerName, onChange }: Props) => {
  return (
    <VFlex>
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
        onChange={onChange}
        maxLength={MAX_LENGTH_CARD_OWNER_NAME}
      />
    </VFlex>
  );
};
