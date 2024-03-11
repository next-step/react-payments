import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

export const CardInputNumber = () => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-number'}>{'카드 번호'}</Label>
      <HFlex className={'input-box'}>
        <Input id={'card-number'} value={1234} type={'text'} onChange={() => {}} />
        <Input value={2345} type={'text'} onChange={() => {}} />
        <Input value={3456} type={'text'} onChange={() => {}} />
        <Input value={7890} type={'text'} onChange={() => {}} />
      </HFlex>
    </VFlex>
  );
};
