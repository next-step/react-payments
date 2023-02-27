import { Button, Card } from '@/components/Common';
import Layout from '@/components/Layout';
import { useCardList } from '@/context/CardListContext';
import { Link } from 'react-router-dom';

function CardList() {
  const cardList = useCardList();

  return (
    <div>
      <div className="root">
        <Layout headerTitle="보유카드">
          <div>
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
        </Layout>
      </div>
    </div>
  );
}

export default CardList;
