import { CardInputContainer } from '@/features/card/components/CardInputContainer';
import { IconArrowBack } from '@/assets/IconArrowBack';
import { Header } from '@/components/molecules/Header';
import { Button } from '@/components/atoms/Button';
import { Heading } from '@/components/atoms/Heading';
import { RootLayout } from '@/components/layout/RootLayout';
import { AppLayout } from '@/components/layout/AppLayout';

interface Props {
  onPrev: () => void;
  onNext: () => void;
}

export const AddCardPage = ({ onPrev, onNext }: Props) => {
  return (
    <RootLayout>
      <AppLayout>
        <Header
          className={'gap-4'}
          left={
            <Button type={'button'} onClick={onPrev}>
              <IconArrowBack />
            </Button>
          }
          heading={
            <Heading as={'h2'} className={'page-title'}>
              {'카드 추가'}
            </Heading>
          }
        />
        <CardInputContainer onNext={onNext} />
      </AppLayout>
    </RootLayout>
  );
};
