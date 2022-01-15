import { ReactNode } from 'react';

const CardListPage = () => {
  return (
    <div className="flex-column-center">
      <CardListTitle>보유 카드</CardListTitle>
      <Card />
      <AddCardButton />
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

const AddCardButton = () => {
  return (
    <div className="card-box">
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardListPage;
