import { HTMLAttributes, ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';

const CardListPage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex-column-center">
      <CardListTitle>보유 카드</CardListTitle>
      {/**카드 */}
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

const AddCardButton = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} style={{ cursor: 'pointer' }} className="card-box">
      <div className="empty-card">+</div>
    </div>
  );
};

export default CardListPage;
