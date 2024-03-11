import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

export const CardInputPassword = () => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-password'}>{'카드 비밀번호'}</Label>
      <HFlex className={'input-box'}>
        <Input
          id={'card-password'}
          value={''}
          type={'password'}
          className={'w-15'}
          onChange={() => {}}
        />
        <Input value={''} type={'password'} className={'w-15'} onChange={() => {}} />
        <Input value={''} type={'password'} className={'w-15'} onChange={() => {}} />
        <Input value={''} type={'password'} className={'w-15'} onChange={() => {}} />
      </HFlex>
    </VFlex>
  );
};
