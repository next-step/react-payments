import React from "react";
import { useNavigate } from "react-router-dom";
import { CardType, RoutePath } from "@common/constants";
import Card from "@components/card";

const CardListPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Card List Page</div>
      <Card type={CardType.new} onClick={() => navigate(RoutePath.AddCard)} />
    </>
  );
};

export default CardListPage;
