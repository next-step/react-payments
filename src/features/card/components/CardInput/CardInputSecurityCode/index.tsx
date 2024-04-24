import { ChangeEvent } from 'react';

import { Input } from '@/components/atoms/Input';
import { Label } from '@/components/atoms/Label';
import { VFlex } from '@/components/atoms/VFlex';
import { CardInputInterface } from '@/features/card/types/cardTypes';

interface Props {
  securityCode: CardInputInterface['securityCode'];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const INPUT_ID = 'card-security-code';

export const CardInputSecurityCode = ({ securityCode, onChange }: Props) => {
  return (
    <VFlex>
      <Label htmlFor={INPUT_ID}>{'보안코드(CVC/CVV)'}</Label>
      <Input
        id={INPUT_ID}
        value={securityCode}
        type={'password'}
        className={'w-25'}
        onChange={onChange}
      />
    </VFlex>
  );
};
