import Card from '@/components/card/Card';
import EmptyCard from '@/components/card/EmptyCard';
import FlexCenter from '@/components/common/flex-center/FlexCenter';
import PageTitle from '@/components/common/page-title/PageTitle';
import { type Route } from '@/domain/type';
import useCardContext from '@/provider/card-info-provider/hook/useCardContext';

import useStepContext from '@/provider/step-provider/hook/useStepContext';

const CardList = () => {
  const { myCardList, handleCardState } = useCardContext();
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
