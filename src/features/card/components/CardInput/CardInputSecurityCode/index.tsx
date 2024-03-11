import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

export const CardInputSecurityCode = () => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-security-code'}>{'보안코드(CVC/CVV)'}</Label>
      <Input
        id={'card-security-code'}
        value={''}
        type={'password'}
        className={'w-25'}
        onChange={() => {}}
      />
    </VFlex>
  );
};
