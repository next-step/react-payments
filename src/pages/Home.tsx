import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CardList from 'src/components/CardList/CardList';
import { NewCardContext } from 'src/contexts/NewCardContext';
import { JsonToArr } from 'src/utils/functions';
import { ICardInfo } from 'src/utils/types';
import Header from '../components/Header/Header';

const Home = () => {
  const navigate = useNavigate();
  const { handleCardInfo } = useContext(NewCardContext);
  const cards = JsonToArr<ICardInfo[]>(localStorage.getItem('cards')) || [];

  const onClickCard = (cardInfo: ICardInfo) => {
    handleCardInfo({
      ...cardInfo,
      bankTitle: cardInfo.title,
      cvc: '',
      firstPassword: '',
      secondPassword: '',
    });
    navigate('/card-alias');
  };

  const onClickEmptyCard = () => {
    navigate('/card-new');
  };

  return (
    <>
      <Header title="보유 카드" />
      <div className="content">
        <CardList
          cardInfoList={cards}
          onClickCard={onClickCard}
          onClickEmptyCard={onClickEmptyCard}
        />
      </div>
    </>
  );
};

export default Home;
