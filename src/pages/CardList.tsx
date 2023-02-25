import { NavLink, useNavigate } from 'react-router-dom';
import { cardRepository } from '../repositories';
import { CardBox, PageTitle } from '../components';
import { ICardBox } from '../domain/types';
import { useMemo } from 'react';

export default function CardList() {
  const navigate = useNavigate();
  const cardList = useMemo<ICardBox[]>(() => (
    cardRepository.getItem().sort((a, b) => b.index - a.index)
  ), []);

  const goRegisterComplete = (index: number) => {
    navigate(`/register-complete?card=${index}`);
  };

  return (
    <div className="app flex-column-center">
      <PageTitle title="보유 카드"></PageTitle>
      <div className="card-box">
        <NavLink to="register">
          <div className="empty-card">+</div>
        </NavLink>
      </div>
      {cardList.map((item) => (
        <div
          className="flex-column-center"
          key={item.cardNumber}
          onClick={() => goRegisterComplete(item.index)}
        >
          <CardBox {...item} />
          {item.nickname && <span className="card-nickname">{item.nickname}</span>}
        </div>
      ))}
    </div>
  );
}