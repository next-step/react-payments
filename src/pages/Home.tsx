import { useNavigate } from 'react-router-dom';
import Card from '../components/Card';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();
  return (
    <main>
      <Header title="보유 카드" />
      <div className="content">
        <div className="card-list">
          <Card
            cardInfo={{
              bgColor: 'skyblue',
              title: '윤상 카드',
              customerName: 'YOON',
              expirationDate: '02/21',
              creditNumber: '1234-5678-1234-0123',
            }}
            alias="윤카"
          />
          <Card empty newCardClick={() => navigate('/new')} />
        </div>
      </div>
    </main>
  );
};

export default Home;
