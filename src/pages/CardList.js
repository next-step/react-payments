import Card from '../components/Card';
import CardPlus from '../components/CardPlus';
import PageTitle from '../components/PageTitle';
import RootContainer from '../components/container/Root';
import AppContainer from '../components/container/App';
import { useContext } from 'react';
import { AppContext } from '../AppContext';

const CardList = () => {
  const { cardList = [] } = useContext(AppContext);
  return (
    <RootContainer>
      <AppContainer appClass="flex-column-center">
        <PageTitle title="보유 카드" />
        {cardList.map((card, i) => (
          <Card key={`Card-${i}`} card={card} />
        ))}
        <CardPlus />
      </AppContainer>
    </RootContainer>
  );
};

export default CardList;
