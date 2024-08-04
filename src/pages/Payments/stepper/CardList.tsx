import { useCardInfoContext } from '@/context/CardInfo';
import Button from '@components/atoms/Button/Button';
import VStack from '@components/atoms/VStack/VStack';
import HStack from '@components/atoms/HStack/HStack';
import { Card } from '@components/molecules/Card/Card';
import Header from '@components/organisms/Header/Header';
import CardDisplay from '@components/organisms/CardDisplay/CardDisplay';
import { FormValues } from '@/type/formType';
import { sortByDateDescending } from '@/utils/sort';

type CardListProps = {
  onNext: () => void;
  moveToStep: () => void;
};

export default function CardList({ onNext, moveToStep }: CardListProps) {
  const { cardList, setCardInfo, deleteCard, resetCard } = useCardInfoContext();

  const moveToAddCardCompletedPage = (card: FormValues) => {
    setCardInfo(card);
    moveToStep();
  };

  const moveToAddCardPage = () => {
    resetCard();
    onNext();
  };

  const handleDeleteButton = (card: FormValues) => {
    if (window.confirm(`${card.cardAlias}를 삭제하시겠습니까?`)) {
      deleteCard(card);
    }
  };

  return (
    <VStack>
      <HStack>
        <Header className='mb-10'>보유 카드</Header>
      </HStack>

      <div className='card-list-body w-75'>
        {sortByDateDescending(cardList).map((card: FormValues) => (
          <VStack>
            <CardDisplay
              size='small'
              cardInfo={card}
              isHover={true}
              onOpen={() => moveToAddCardCompletedPage(card)}
            />
            <HStack className='w-60 mt-3'>
              <Card.Nickname text={card.cardAlias || card.cardCompany.name} />
              <span className='mx-auto'>|</span>
              <Button
                className='button-delete'
                onClick={() => handleDeleteButton(card)}
              >
                삭제
              </Button>
            </HStack>
          </VStack>
        ))}
      </div>

      <div className='card-list-footer'>
        <Card.Box>
          <Card.Empty onClick={moveToAddCardPage}>+</Card.Empty>
        </Card.Box>
      </div>
    </VStack>
  );
}
