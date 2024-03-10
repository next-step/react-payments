import Card from '@/components/card/Card';
import EmptyCard from '@/components/card/EmptyCard';
import { MyCardsContext } from '@/provider/my-cards-provider/MyCardsProvider';
import { StepContext } from '@/provider/step-provider/StepProvider';
import { useContext } from 'react';

const CardList = () => {
  const { myCardList } = useContext(MyCardsContext);
  const { navigate } = useContext(StepContext);
  const goToPage = (path: string) => {
    navigate(path);
  };
  return (
    <div>
      {myCardList.map((cardState, i) => (
        <>
          <Card key={i} onClick={() => goToPage('COMPLETE')} {...cardState} />
          <p>{cardState.nickname}</p>
        </>
      ))}
      <EmptyCard onClick={() => goToPage('CARD')} />
    </div>
  );
};

export default CardList;
