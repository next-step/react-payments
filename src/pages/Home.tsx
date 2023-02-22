import { useNavigate } from 'react-router-dom';
import CardList from 'src/components/CardList/CardList';
import Header from '../components/Header/Header';

const Home = () => {
  const navigate = useNavigate();
  const onClickEmptyCard = () => {
    navigate('/new');
  };
  return (
    <>
      <Header title="보유 카드" />
      <div className="content">
        <CardList cardInfoList={[]} onClickEmptyCard={onClickEmptyCard} />
      </div>
    </>
  );
};

export default Home;
