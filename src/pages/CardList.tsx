import { NavLink, useNavigate } from 'react-router-dom';
import { cardRepository } from '../repositories';
import { CardBox, PageTitle } from '../components';
import { ICardBoxDTO } from '../domain/types';
import { useCallback, useState } from 'react';
import { Button } from '../components/form';

export default function CardList() {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState<ICardBoxDTO[]>(
    cardRepository.getItem().sort((a, b) => b.index - a.index)
  );
  const goRegisterComplete = useCallback((index: number) => {
    navigate(`/register-complete?card=${index}`);
  }, []);

  const removeCard = useCallback((index: number) => {
    const updateCardList = cardList.filter((item) => item.index !== index);
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
          <div className="flex-column-center" onClick={() => goRegisterComplete(item.index)}>
            <CardBox {...item} />
            <span>{item.nickname}</span>
          </div>
          <Button onClick={() => removeCard(item.index)}>삭제</Button>
        </div>
      ))}
    </div>
  );
}