import Card from "components/card";
import { useRouter } from "hooks/useRouter";
import React from "react";
import { usePayments } from "store/context";

const CardListPage = () => {
  const { go } = useRouter();
  const { cards } = usePayments();

  const moveRegistCard = () => {
    go("regist-card");
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cards.map((card, idx) => (
          <React.Fragment key={idx}>
            <Card
              cardNumbers={card.cardNumbers}
              cardExpiration={card.cardExpiration}
              cardOwnerName={card.cardOwnerName}
              cardCompany={card.cardCompany}
              size={"small"}
            />
            <span>{card.cardNickName}</span>
          </React.Fragment>
        ))}
        <div className="card-box">
          <div className="empty-card" onClick={moveRegistCard}>
            +
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardListPage;
