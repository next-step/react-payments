import PageTitle from '@components/@common/PageTitle';
import HStack from '@components/@common/layout/HStack';
import { Card } from '@components/Card/atoms/Card';

type CardListProps = {
  onNext: () => void;
};

export default function CardList({ onNext }: CardListProps) {
  return (
    <div className='root'>
      <div className='app flex-column-center'>
        <HStack>
          <PageTitle className='mb-10'>보유 카드</PageTitle>
        </HStack>

        <Card.Box>
          <Card.Empty onCardClick={onNext}>+</Card.Empty>
        </Card.Box>
      </div>
    </div>
  );
}
