import { NavLink } from 'react-router-dom';
import Repository from '../core/Repository';
import { CardBox } from '../components';

export default function CardList() {
  const cardList = Repository.get('card-list') || [];

  return (
    <div className="app flex-column-center">
      <div className="flex-center">
        <h2 className="page-title mb-10">보유 카드</h2>
      </div>
      {cardList.map((item) => (
        <>
          <CardBox {...item} key={item.cardNumber}/>
          {item.nickName && (
            <span className="card-nickname">법인카드</span>
          )}
        </>
      ))}
      <div className="card-box">
        <NavLink to="register">
          <div className="empty-card">+</div>
        </NavLink>
      </div>
    </div>
  );
}