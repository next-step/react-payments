import React from "react";
import { useNavigate } from "react-router-dom";
import { CardType, RoutePath } from "@common/constants";
import AddCardBtn from "@components/button/AddCardBtn";
import { useCardData } from "@context/cardData";
import Card from "@components/card";
import { CardData } from "@common/defines";

const CardListPage: React.FC = () => {
  const navigate = useNavigate();
  const { cardDataList, setTempCardData, removeCardData } = useCardData();

  const handleOnClick = (cardData: CardData) => {
    setTempCardData(cardData);
    navigate(RoutePath.AddCardComplete);
  };

  const handleOnClickDeleteBtn = (id?: number) => {
    if (typeof id === "number") {
      removeCardData(id);
    }
  };

  return (
    <div className="root">
      <div className="app flex-column-center">
        <div className="flex-center">
          <h2 className="page-title mb-10">보유 카드</h2>
        </div>
        {cardDataList
          .sort((a, b) => (a?.createdAt ?? 0) - (b?.createdAt ?? 0))
          .map((cardData) => (
            <>
              <Card
                type={CardType.small}
                cardData={cardData}
                onClick={() => handleOnClick(cardData)}
              />
              <button onClick={() => handleOnClickDeleteBtn(cardData.id)}>
                Delete
              </button>
            </>
          ))}
        <AddCardBtn onClick={() => navigate(RoutePath.AddCard)} />
      </div>
    </div>
  );
};

export default CardListPage;
