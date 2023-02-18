import { NavLink } from 'react-router-dom';
import Repository from '../core/Repository';
import { CardBox, PageTitle } from '../components';

export default function CardList() {
  const cardList = Repository.get('card-list') || [];

  return (
    <div className="app flex-column-center">
      <PageTitle title="보유 카드"></PageTitle>
      {cardList.map((item) => (
        <div className="flex-column-center" key={item.cardNumber}>
          <CardBox {...item} />
          {item.nickName && <span className="card-nickname">{item.nickName}</span>}
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