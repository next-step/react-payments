import { useMemo } from "react";
import { Card, FlexCenter, PageTitle } from "../../components";
import { useNavigation } from "../hooks";
import { useMyCardsContext } from "../../providers/my-cards";

export default function CardList() {
  const { handleClickCardAdd } = useNavigation();
  const { myCards } = useMyCardsContext();
  const sortedCards = useMemo(() => [...myCards].reverse(), [myCards]);

  return (
    <div style={{ height: "100%", overflow: "auto" }}>
      <div className="app flex-column-center">
        <FlexCenter>
          <PageTitle className="mb-10">보유 카드</PageTitle>
        </FlexCenter>

        <div className="card-box">
          <div className="empty-card" onClick={handleClickCardAdd}>
            +
          </div>
        </div>

        {sortedCards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
}
