import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { MAX_LENGTH_SECURITY_CODE } from '@/features/card/constants/maxLength';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { Validator } from '@/features/lib/Validator';

interface Props {
  securityCode: CardInputInterface['securityCode'];
  onChange: (prop: 'securityCode', nextVal: CardInputInterface['securityCode']) => void;
}

const INPUT_ID = 'card-security-code';

export const CardInputSecurityCode = ({ securityCode, onChange }: Props) => {
  const onChangeSecurityCode = (e: ChangeEvent<HTMLInputElement>) => {
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

    if (
      !Validator.checkIsValidLength(value, MAX_LENGTH_SECURITY_CODE) &&
      (nativeEvent as InputEvent).inputType !== 'deleteContentBackward'
    ) {
      return;
    }

    onChange('securityCode', value);
  };

  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={INPUT_ID}>{'보안코드(CVC/CVV)'}</Label>
      <Input
        id={INPUT_ID}
        value={securityCode}
        type={'password'}
        className={'w-25'}
        onChange={onChangeSecurityCode}
      />
    </VFlex>
  );
};
