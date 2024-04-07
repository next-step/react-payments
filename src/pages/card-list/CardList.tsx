import { Card, EmptyCard } from '@/components/card';
import { FlexCenter, PageTitle } from '@/components/common';

import { type Route } from '@/domain/type';

import useCardContext from '@/provider/card-info-provider/hooks/useCardContext';
import useStepContext from '@/provider/step-provider/hook/useStepContext';

const CardList = () => {
  const { myCardList, handleCardState, removeCard } = useCardContext();
  const { navigate } = useStepContext();
  const goToPage = (path: Route) => {
    navigate(path);
  };

  return (
    <div className="app flex-column-center">
      <FlexCenter>
        <PageTitle className="mb-10">보유 카드</PageTitle>
      </FlexCenter>
      {myCardList.map((cardState, i) => (
        <>
          <Card
            key={`${cardState.nickname}_${i}`}
            onClick={() => {
              handleCardState(cardState);
              removeCard(i);
              goToPage('COMPLETE');
            }}
            {...cardState}
          />
          <span className="card-nickname">{cardState.nickname}</span>
        </>
      ))}
      <EmptyCard
        onClick={() => {
          goToPage('CARD');
        }}
      />
    </div>
  );
};

export default CardList;
