import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { ChangeEvent } from 'react';

interface Props {
  securityCode: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CardInputSecurityCode = ({ securityCode, onChange }: Props) => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-security-code'}>{'보안코드(CVC/CVV)'}</Label>
      <Input
        id={'card-security-code'}
        value={securityCode}
        type={'password'}
        className={'w-25'}
        onChange={onChange}
      />
    </VFlex>
  );
};
