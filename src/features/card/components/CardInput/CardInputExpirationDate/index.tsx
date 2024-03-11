import { HFlex } from '@/shared/components/atoms/HFlex';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

export const CardInputExpirationDate = () => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-expiration-date'}>{'만료일'}</Label>
      <HFlex className={'input-box w-50'}>
        <Input
          id={'card-expiration-date'}
          value={''}
          type={'text'}
          placeholder={'MM'}
          maxLength={2}
          onChange={() => {}}
        />
        <Input value={''} type={'text'} placeholder={'YY'} maxLength={2} onChange={() => {}} />
      </HFlex>
    </VFlex>
  );
};
