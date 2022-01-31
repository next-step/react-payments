import React from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "@common/constants";
import AddCardBtn from "@components/button/AddCardBtn";

const CardListPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Card List Page</div>
      <AddCardBtn onClick={() => navigate(RoutePath.AddCard)} />
    </>
  );
};

export default CardListPage;
