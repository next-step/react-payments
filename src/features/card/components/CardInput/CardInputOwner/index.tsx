import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { VFlex } from '@/shared/components/atoms/VFlex';

export const CardInputOwner = () => {
  return (
    <VFlex className={'input-container'}>
      <Label htmlFor={'card-owner'}>{'카드 소유자 이름(선택)'}</Label>
      <Input
        id={'card-owner'}
        value={''}
        type={'text'}
        placeholder={'카드에 표시된 이름과 동일하게 입력하세요.'}
        onChange={() => {}}
      />
    </VFlex>
  );
};
