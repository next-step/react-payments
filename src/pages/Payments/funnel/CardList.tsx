import { STEP } from '../payments.constant';
import { Card } from '@/components/card/Card';
import { Card as CardData } from '../payments.type';
import { Funnel } from '../payments.context';

export const CardList = () => {
  const { setStep, setData, data } = Funnel.useContext();

  const cardList = data?.cardList || [];

  const handleAddCard = () => {
    setStep(STEP.ADD_CARD);
  };

  const sortedCardList = cardList.sort((a, b) =>
    a.createdAt < b.createdAt ? 1 : -1
  );

  const handleCardClick = (card: CardData) => {
    setData((prev) => {
      if (!prev) return;

      return {
        ...prev,
        tempCard: card,
      };
    });

    setStep(STEP.ADD_CARD_COMPLETE);
  };

  const handleDelete = (card: CardData) => {
    setData((prev) => {
      if (!prev) return;

      return {
        ...prev,
        cardList: prev.cardList.filter(
          (prevCard) => prevCard.createdAt !== card.createdAt
        ),
      };
    });
  };

  return (
    <div>
      <h2 className='page-title mb-10'>보유 카드</h2>
      <div className='card-list'>
        {sortedCardList.map((card) => {
          const { cardName } = card;

          return (
            <div
              key={card.createdAt.toString()}
              className='flex-column-center gap-5'
            >
              <Card
                data={card}
                onClick={() => handleCardClick(card)}
                isComplete={true}
              />
              <div className='flex-row-between w-50'>
                <div className='card-name'>{cardName}</div>
                <span>|</span>
                <button
                  className='card-name button-reset'
                  onClick={() => handleDelete(card)}
                >
                  삭제
                </button>
              </div>
            </div>
          );
        })}
        <div className='card-box' onClick={handleAddCard}>
          <div className='empty-card'>+</div>
        </div>
      </div>
    </div>
  );
};
