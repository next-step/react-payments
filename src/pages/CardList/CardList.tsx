import { Card, EmptyCard, Spacer } from '@/components/Common';
import Layout from '@/components/Layout';
import { useCardList } from '@/context/CardListContext';
import { Link } from 'react-router-dom';

function CardList() {
  const cardList = useCardList();

  return (
    <Layout headerTitle="보유카드">
      <div className="flex flex-col gap-4 overflow-scroll">
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
        <Link to="/add">
          <EmptyCard />
        </Link>
        <Spacer space="lg" />
      </div>
    </Layout>
  );
}

export default CardList;
