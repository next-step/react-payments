import { useNavigate } from 'react-router-dom';

import CardBox from '../CardBox';
import Card from '../Card';

import { useCardsContext } from '../hooks/useCardsContext';

export default function CardList() {
  const { cards } = useCardsContext();

  const navigate = useNavigate();

  const handleClickEdit = (id: number) => {
    navigate(`/add/complete/${String(id)}`);
  };

  const handleClickAdd = () => {
    navigate('/add');
  };

  console.log(cards);
  const reversedCards = cards.reverse();
  console.log(reversedCards);

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h1 className="page-title mb-10">보유 카드</h1>
        </div>
        {reversedCards.map((card) => (
          <CardBox
            key={card.id}
            onClick={() => handleClickEdit(card.id)}
            backgroundColor={card.cardCompanyColor}
          >
            <Card
              variant="small"
              cardNumber={card.cardNumber}
              ownerName={card.ownerName}
              expirationDate={card.expirationDate}
              cardCompany={card.cardCompany}
            />
          </CardBox>
        ))}
        <CardBox onClick={handleClickAdd}>
          <p>+</p>
        </CardBox>
      </div>
    </div>
  );
}
