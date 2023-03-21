import { Card } from '@/components/Common';
import { useCardList } from '@/context/CardListContext';
import { Link } from 'react-router-dom';

function Cards() {
  const cardList = useCardList();

  return (
    <>
      {cardList.map(card => {
        const {
          id,
          cardNumber1,
          cardNumber2,
          cardNumber3,
          cardNumber4,
          month,
          year,
          cardCompany,
          cardOwner,
          nickname,
        } = card;

        return (
          <div key={id} className="flex flex-col justify-center items-center gap-2">
            <Link to={`/complete/${id}`} state={{ cardForm: card, isEditMode: true }}>
              <Card
                cardOwner={cardOwner}
                cardCompany={cardCompany}
                cardNumber={{
                  cardNumber1,
                  cardNumber2,
                  cardNumber3,
                  cardNumber4,
                }}
                expiration={{
                  month,
                  year,
                }}
              />
            </Link>
            <span className="text-sm">{nickname}</span>
          </div>
        );
      })}
    </>
  );
}

export default Cards;
