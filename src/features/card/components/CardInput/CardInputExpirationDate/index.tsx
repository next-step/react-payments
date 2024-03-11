import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { formattedExpirationDateMM } from '@/features/utils/formattedString';
import { Validator } from '@/features/lib/Validator';
import { EXPIRATION_DATE_COUPLER } from '@/features/card/constants/display';

interface Props {
  expirationDate: CardInputInterface['expirationDate'];
  onChange: (prop: 'expirationDate', nextVal: CardInputInterface['expirationDate']) => void;
}

const INPUT_ID = 'card-expiration-date';

export const CardInputExpirationDate = ({ expirationDate, onChange }: Props) => {
  const onChangeExpirationDateMM = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
      nativeEvent,
    } = e;

    if (
      !Validator.checkIsValidExpirationDateMM(value) &&
      (nativeEvent as InputEvent).inputType !== 'deleteContentBackward'
    ) {
      return;
    }

    onChange('expirationDate', { ...expirationDate, ['MM']: formattedExpirationDateMM(value) });
  };

  const onChangeExpirationDateYY = (e: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
      nativeEvent,
    } = e;

    if (
      !Validator.checkIsNumberParsableString(value) &&
      (nativeEvent as InputEvent).inputType !== 'deleteContentBackward'
    ) {
      return;
    }

    onChange('expirationDate', { ...expirationDate, ['YY']: value });
  };

  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={INPUT_ID}>{'만료일'}</Label>
      <HFlex className={'input-box w-50'}>
        <Input
          id={INPUT_ID}
          value={expirationDate.MM}
          type={'text'}
          placeholder={'MM'}
          maxLength={2}
          onChange={onChangeExpirationDateMM}
        />
        {expirationDate.MM.length >= 2 && EXPIRATION_DATE_COUPLER}
        <Input
          value={expirationDate.YY}
          type={'text'}
          placeholder={'YY'}
          maxLength={2}
          onChange={onChangeExpirationDateYY}
        />
      </HFlex>
    </VFlex>
  );
};
