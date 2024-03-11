import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { ChangeEvent } from 'react';

interface Props {
  expirationDate: {
    MM: string;
    YY: string;
  };
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const CardInputExpirationDate = ({ expirationDate, onChange }: Props) => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-expiration-date'}>{'만료일'}</Label>
      <HFlex className={'input-box w-50'}>
        <Input
          id={'card-expiration-date'}
          value={expirationDate.MM}
          type={'text'}
          placeholder={'MM'}
          maxLength={2}
          onChange={onChange}
        />
        <Input
          value={expirationDate.YY}
          type={'text'}
          placeholder={'YY'}
          maxLength={2}
          onChange={onChange}
        />
      </HFlex>
    </VFlex>
  );
};
