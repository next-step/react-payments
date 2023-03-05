import React from "react";
import { CardBox, EmptyCard } from "../components/common/Card";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/common/DefaultLayout";

const CardListPage = () => {
  const navigate = useNavigate();

  const handleEmptyCardClick = () => {
    navigate("/card-add");
  };

  return (
    <DefaultLayout pageTitle={"카드 목록"}>
      <CardBox>
        <EmptyCard onClick={handleEmptyCardClick}>+</EmptyCard>
      </CardBox>
    </DefaultLayout>
  );
};

export default CardListPage;
