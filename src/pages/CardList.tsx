import { NavLink } from 'react-router-dom';
import { cardRepository } from '../repository';
import { CardBox, PageTitle } from '../components';
import { ICardBox } from '../domain/types';

export default function CardList() {
  const cardList = cardRepository.getItem();

  return (
    <div className="app flex-column-center">
      <PageTitle title="보유 카드"></PageTitle>
      {cardList.map((item: ICardBox) => (
        <div className="flex-column-center" key={item.cardNumber}>
          <CardBox {...item} />
          {item.nickname && <span className="card-nickname">{item.nickname}</span>}
        </div>
      ))}
      <div className="card-box">
        <NavLink to="register">
          <div className="empty-card">+</div>
        </NavLink>
      </div>
    </div>
  );
}