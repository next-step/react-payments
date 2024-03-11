import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { ChangeEvent } from 'react';

interface Props {
  cardNumber: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CardInputNumber = ({ cardNumber, onChange }: Props) => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-number'}>{'카드 번호'}</Label>
      <HFlex className={'input-box'}>
        <Input id={'card-number'} value={cardNumber} type={'text'} onChange={onChange} />
      </HFlex>
    </VFlex>
  );
};
