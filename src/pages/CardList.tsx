import PageTitle from '@components/@common/PageTitle';
import HStack from '@components/@common/layout/HStack';
import CardBox from '@components/Card/atoms/CardBox';
import EmptyCard from '@components/Card/atoms/EmptyCard';

type CardListProps = {
  onFirstStep: () => void;
};

export default function CardList({ onFirstStep }: CardListProps) {
  return (
    <div className='root'>
      <div className='app flex-column-center'>
        <HStack>
          <PageTitle className='mb-10'>보유 카드</PageTitle>
        </HStack>

        <CardBox>
          <EmptyCard onCardClick={onFirstStep}>+</EmptyCard>
        </CardBox>
      </div>
    </div>
  );
}
