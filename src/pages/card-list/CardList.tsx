import { useCallback, useMemo } from "react";
import { Card, FlexCenter, PageTitle } from "../../components";
import { useNavigation } from "../hooks";
import { useMyCardsContext } from "../../providers/my-cards";

export default function CardList() {
  const { handleClickCardAdd, goToCardEdit } = useNavigation();
  const { myCards } = useMyCardsContext();
  const sortedCards = useMemo(() => [...myCards].reverse(), [myCards]);

  const handleClickCard = useCallback(
    (id: string) => {
      goToCardEdit(id);
    },
    [goToCardEdit]
  );

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <div className="app">
        <FlexCenter>
          <PageTitle className="mb-10">보유 카드</PageTitle>
        </FlexCenter>

        <div className="card-box">
          <div className="empty-card" onClick={handleClickCardAdd}>
            +
          </div>
        </div>

        {sortedCards.map((card) => (
          <Card onClick={handleClickCard} key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
