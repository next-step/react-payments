import { NavLink, useNavigate } from 'react-router-dom';
import { cardRepository } from '../repositories';
import { Card, PageTitle } from '../components/atoms';
import { ICardDTO } from '../domain/types';
import { useCallback, useState } from 'react';
import { CardItem } from '../components/molecules';

export default function CardList() {
  const navigate = useNavigate();
  const [cardList, setCardList] = useState<ICardDTO[]>(
    cardRepository.getItem().sort((a, b) => b.cardNumber - a.cardNumber)
  );

  const moveRegisterComplete = useCallback((cardNumber: string) => {
    navigate(`/register-complete?card=${cardNumber}`);
  }, []);

  const removeCard = useCallback((cardNumber: string) => {
    setCardList((prevState) => {
      const updateCardList = prevState.filter((item) => item.cardNumber !== cardNumber);
      cardRepository.setItem(updateCardList);

      return updateCardList;
    });
  }, []);

  return (
    <div className="app flex-column-center">
      <PageTitle title="보유 카드"/>
      <div className="card-box">
        <NavLink to="register">
          <div className="empty-card">+</div>
        </NavLink>
      </div>
      {cardList.map((card) => (
        <CardItem
          key={card.cardNumber}
          cardNumber={card.cardNumber}
          nickname={card.nickname}
          buttonText="삭제"
          onClickChildren={moveRegisterComplete}
          onClickButton={removeCard}
        >
          <Card {...card} />
        </CardItem>
      ))}
    </div>
  );
}
