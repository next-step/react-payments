import React from "react";
import styled from "styled-components";
import CardExpirationDateInput from "../components/CardExpirationDateInput";
import CardNumberInput from "../components/CardNumberInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardPasswordFirstTwoDigitsInput from "../components/CardPasswordFirstTwoDigitsInput";
import CardPreview from "../components/CardPreview";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";
import DefaultLayout from "../components/common/DefaultLayout";

const PageTitle = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
`;

const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled.span`
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  line-height: 22px;
`;

const Button = styled.button`
  width: 100%;
  max-width: 180px;
  height: 50px;
  background-color: #a6c8ff;
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #6d8cff;
  }
`;

const CardAddPage = () => {
  return (
    <DefaultLayout pageTitle={"카드 추가"}>
      <>
        <CardPreview
          cardNumber="1234 5678 9012 3456"
          ownerName="김민수"
          expirationDate="12/23"
        />
        <CardNumberInput
          onChange={(value: string) => console.log(value)}
          cardNumber=""
        />
        <CardExpirationDateInput />
        <CardOwnerNameInput
          onChange={(value: string) => console.log(value)}
          value=""
        />
        <CardSecurityCodeInput />
        <CardPasswordFirstTwoDigitsInput />
        <ButtonBox>
          <Button>
            <ButtonText>다음</ButtonText>
          </Button>
        </ButtonBox>
      </>
    </DefaultLayout>
  );
};

export default CardAddPage;
