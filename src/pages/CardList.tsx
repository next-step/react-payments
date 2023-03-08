import { NavLink, useNavigate } from 'react-router-dom';
import { cardRepository } from '../repositories';
import { Button, Card, PageTitle } from '../components/atoms';
import { ICardDTO } from '../domain/types';
import { useCallback, useState } from 'react';

export default function CardList() {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState<ICardDTO[]>(
    cardRepository.getItem().sort((a, b) => b.index - a.index)
  );

  const goRegisterComplete = useCallback((cardNumber: string) => {
    navigate(`/register-complete?card=${cardNumber}`);
  }, []);

  const removeCard = useCallback((cardNumber: string) => {
    const updateCardList = cardList.filter((item) => item.cardNumber !== cardNumber);
    cardRepository.setItem(updateCardList);

    setCardList(updateCardList);
  }, []);

  return (
    <div className="app flex-column-center">
      <PageTitle title="보유 카드"/>
      <div className="card-box">
        <NavLink to="register">
          <div className="empty-card">+</div>
        </NavLink>
      </div>
      {cardList.map((item) => (
        <div
          key={item.cardNumber}
        >
          <div className="flex-column-center" onClick={() => goRegisterComplete(item.cardNumber)}>
            <Card {...item} />
            <span>{item.nickname}</span>
          </div>
          <Button onClick={() => removeCard(item.cardNumber)}>삭제</Button>
        </div>
      ))}
    </div>
  );
}
