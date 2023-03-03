import { Card, EmptyCard } from '@/components/Common';
import Layout from '@/components/Layout';
import { useCardList } from '@/context/CardListContext';
import { Link } from 'react-router-dom';

function CardList() {
  const cardList = useCardList();

  return (
    <Layout headerTitle="보유카드">
      <div className="flex flex-col gap-4 overflow-scroll">
        {cardList.map(card => {
          const { id, cardNumber1, cardNumber2, cardNumber3, cardNumber4, month, year, cardCompany, cardOwner } = card;

          return (
            <Link key={id} to={`/complete/${id}`} state={{ cardForm: card }}>
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
          );
        })}
        <Link to="/add">
          <EmptyCard />
        </Link>
      </div>
    </Layout>
  );
}

export default CardList;
