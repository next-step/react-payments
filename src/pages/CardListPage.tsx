import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@common/constants";
import AddCardBtn from "@components/button/AddCardBtn";
import { useCardData } from "@context/cardData";

const CardListPage: React.FC = () => {
  const navigate = useNavigate();
  const { cardDataList } = useCardData();
  console.log(cardDataList);
  return (
    <>
      <div>Card List Page</div>
      <AddCardBtn onClick={() => navigate(RoutePath.AddCard)} />
    </>
  );
};

export default CardListPage;
