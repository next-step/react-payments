import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/common/DefaultLayout";
import {
  CardBox,
  CardTextBig,
  PaymentsCard,
} from "../components/common/PaymentsCard";

const AddCardText = styled(CardTextBig)`
  cursor: pointer;
`;

const CardListPage = () => {
  const navigate = useNavigate();

  const handleEmptyCardClick = () => {
    navigate("/card-add");
  };

  return (
    <DefaultLayout pageTitle={"카드 목록"}>
      <CardBox>
        <PaymentsCard type="empty" onClick={handleEmptyCardClick}>
          <AddCardText>+</AddCardText>
        </PaymentsCard>
      </CardBox>
    </DefaultLayout>
  );
};

export default CardListPage;
