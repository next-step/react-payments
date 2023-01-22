import { Card, FlexCenter, PageTitle } from "../../components";
import { ICard } from "../../domain";
import { useNavigation } from "../hooks";
import { useMyCardsContext } from "../../providers/my-cards";

const cardItem: ICard = {
  id: "1234",
  type: "로이드",
  numbers: ["1234", "5678", "1234", "5678"],
  owner: "김로이드",
  expiredMonth: "12",
  expiredYear: "25",
};

export default function CardList() {
  const { handleClickCardAdd } = useNavigation();
  const { myCards } = useMyCardsContext();

  return (
    <div className="app flex-column-center">
      <FlexCenter>
        <PageTitle className="mb-10">보유 카드</PageTitle>
      </FlexCenter>

      {myCards.map((card) => (
        <Card key={card.id} {...card} />
      ))}

      <div className="card-box">
        <div className="empty-card" onClick={handleClickCardAdd}>
          +
        </div>
      </div>
    </div>
  );
}
