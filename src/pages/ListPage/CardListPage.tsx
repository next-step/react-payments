import Card from "components/card";
import { useRouter } from "hooks/useRouter";
import React from "react";
import { ROUTE } from "router";
import { usePaymentsDispatch, usePaymentsState } from "store/context";

const CardListPage = () => {
  const { go } = useRouter();
  const dispatch = usePaymentsDispatch();

  const { cardList } = usePaymentsState();

  const cards = [...cardList].reverse();

  const movePage = () => {
    go(ROUTE.REGIST_CARD);
  };

  const handleDeleteCard = (id: number) => {
    dispatch({ type: "DELETE_CARD", id });
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        <div className="card-box">
          <div className="empty-card" onClick={movePage}>
            +
          </div>
        </div>
        {cards.map(
          (card, index) =>
            card && (
              <React.Fragment key={index}>
                <div onClick={() => go(`${ROUTE.REGIST_CARD}/${card.id}`)}>
                  <Card
                    cardNumbers={card.cardNumbers}
                    cardExpiration={card.cardExpiration}
                    cardOwnerName={card.cardOwnerName}
                    cardCompany={card.cardCompany}
                    size={"small"}
                  />
                </div>
                <span>{card.cardNickName}</span>
                <button className="delete-button" onClick={() => handleDeleteCard(Number(card.id))}>
                  삭제
                </button>
              </React.Fragment>
            )
        )}
      </div>
    </div>
  );
};

export default CardListPage;
