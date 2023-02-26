import { Button, Card } from '@/components/Common';
import { useCardList } from '@/context/CardListContext';
import { Link } from 'react-router-dom';

function CardList() {
  const cardList = useCardList();

  return (
    <div>
      <div className="root">
        <div className="app flex-column-center">
          <div className="flex-center">
            <h2 className="page-title mb-10">보유 카드</h2>
          </div>
          <Link to="/add">
            <Button>카드추가</Button>
          </Link>
          {cardList.map(
            ({
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
            }) => (
              <Link key={id} to={`/complete/${id}`}>
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
                  cardNickname={nickname}
                />
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default CardList;
