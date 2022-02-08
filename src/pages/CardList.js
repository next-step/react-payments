import Card from '../components/Card';
import CardPlus from '../components/CardPlus';
import PageTitle from '../components/PageTitle';
import RootContainer from '../components/container/Root';
import AppContainer from '../components/container/App';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const CardList = () => {
  const {
    cardList = [],
    setRouteStatus,
    setTargetCard,
  } = useContext(AppContext);

  const modify = (card) => {
    setTargetCard(card);
    setRouteStatus('modify');
  };

  return (
    <RootContainer>
      <AppContainer appClass="flex-column-center">
        <PageTitle title="보유 카드" />
        {[...cardList].reverse().map((card, i) => (
          <div
            key={`Card-${i}`}
            className="flex-column-center"
            onClick={() => modify(card)}
          >
            <Card card={card} />
          </div>
        ))}
        <CardPlus />
      </AppContainer>
    </RootContainer>
  );
};

export default CardList;
