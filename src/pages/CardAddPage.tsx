import React from "react";
import CardExpirationDateInput from "../components/CardExpirationDateInput";
import CardNumberInput from "../components/CardNumberInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardPasswordFirstTwoDigitsInput from "../components/CardPasswordFirstTwoDigitsInput";
import CardPreview from "../components/CardPreview";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";
import DefaultLayout from "../components/common/DefaultLayout";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const BackButton = styled.button`
  position: absolute;
  top: 24px;
  left: 24px;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ffffff;
  border: none; // 변경된 부분
  cursor: pointer;
  font-size: 24px; // 추가된 부분
`;

export interface CardAddPageProps {
  handleGoBack?: () => void;
}

const CardAddPage: React.FC<CardAddPageProps> = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <DefaultLayout pageTitle={"카드 추가"}>
      <>
        <BackButton onClick={handleGoBack}>{"<"}</BackButton>
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
        {/* <ButtonBox>
          <Button>
            <ButtonText>다음</ButtonText>
          </Button>
        </ButtonBox> */}
      </>
    </DefaultLayout>
  );
};
export default CardAddPage;
