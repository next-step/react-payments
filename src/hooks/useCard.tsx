import { useContext } from 'react';
import { CardType } from 'types';
import { useNavigate } from 'react-router-dom';
import { PaymentsContext } from 'context/Payments';

const useCard = (id) => {
  const paymentCtx = useContext(PaymentsContext);
  const myCardList = paymentCtx.cardList;
  const currentCard = myCardList.find((card: CardType) => card.id === id);
  const navigate = useNavigate();

  const remove = () => {
    if (!currentCard) return;
    paymentCtx.removeCard(currentCard);
  };

  const modify = () => {
    if (!currentCard) return;
    localStorage.setItem('id', currentCard.id);
    navigate('/alias');
  };

  return { remove, modify };
};

export default useCard;
