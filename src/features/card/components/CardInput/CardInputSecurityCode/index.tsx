import { ChangeEvent } from 'react';
import { CardInputInterface } from '@/features/card/types/cardInputTypes';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

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
