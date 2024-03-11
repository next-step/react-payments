// import { CardBox } from '@/components/Card/CardBox';
import { IconArrowBack } from '@/assets/IconArrowBack';
import { CardBox } from '@/components/Card/CardBox';
import { Button } from '@/shared/components/atoms/Button';
import { HFlex } from '@/shared/components/atoms/HFlex';
import { Heading } from '@/shared/components/atoms/Heading';
import { Input } from '@/shared/components/atoms/Input';
import { Label } from '@/shared/components/atoms/Label';
import { Text } from '@/shared/components/atoms/Text';
import { VFlex } from '@/shared/components/atoms/VFlex';
import { RootLayout } from '@/shared/layout/RootLayout';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export const AddCardPage = ({ onPrev, onNext }: Props) => {
  return (
    <RootLayout>
      <div className="app">
        <HFlex>
          <Button type={'button'} onClick={onPrev}>
            <IconArrowBack />
          </Button>
          <Heading as={'h2'} className="page-title">
            {'카드 추가'}
          </Heading>
        </HFlex>

        <CardBox cardName={''} companyName={''} MM={12} YY={23} />
        <VFlex className={'input-container'}>
          <Label htmlFor={'card-number'}>{'카드 번호'}</Label>
          <HFlex className={'input-box'}>
            <Input id={'card-number'} value={1234} type={'text'} onChange={() => {}} />
            <Input value={2345} type={'text'} onChange={() => {}} />
            <Input value={3456} type={'text'} onChange={() => {}} />
            <Input value={7890} type={'text'} onChange={() => {}} />
          </HFlex>
        </VFlex>
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
        <Button type={'button'} onClick={onNext} className={'ml-auto'}>
          <Text className={'button-text'}>{'다음'}</Text>
        </Button>
      </div>
    </RootLayout>
  );
};
