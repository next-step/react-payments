import { HTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const CardListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-column-center">
      <CardListTitle>보유 카드</CardListTitle>
      <Card />
      <AddCardButton onClick={() => navigate('/registration')} />
    </div>
  );
};

const CardListTitle = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex-center">
      <h2 className="page-title mb-10">{children}</h2>
    </div>
  );
};

const Card = () => {
  return (
    <>
      <div className="card-box">
        <div className="small-card">
          <div className="card-top">
            <span className="card-text">클린카드</span>
          </div>
          <div className="card-middle">
            <div className="small-card__chip"></div>
          </div>
          <div className="card-bottom">
            <div className="card-bottom__number">
              <span className="card-text">1111 - 2222 - oooo - oooo</span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">YUJO</span>
              <span className="card-text">12 / 23</span>
            </div>
          </div>
        </div>
      </div>
      <span className="card-nickname">법인카드</span>
    </>
  );
};

const AddCardButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} style={{ cursor: 'pointer' }} className="card-box">
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardListPage;
