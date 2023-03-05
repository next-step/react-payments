import React from "react";
import CardExpirationDateInput from "../components/CardExpirationDateInput";
import CardNumberInput from "../components/CardNumberInput";
import CardOwnerNameInput from "../components/CardOwnerNameInput";
import CardPasswordFirstTwoDigitsInput from "../components/CardPasswordFirstTwoDigitsInput";
import CardPreview from "../components/CardPreview";
import CardSecurityCodeInput from "../components/CardSecurityCodeInput";
import DefaultLayout from "../components/common/DefaultLayout";
import { useNavigate } from "react-router-dom";
import CardSubmitButton from "../components/CardSubmitButton";

export interface CardAddPageProps {
  handleGoBack?: () => void;
}

const CardAddPage: React.FC<CardAddPageProps> = ({ handleGoBack }) => {
  const navigate = useNavigate();

  const handleGoBackClick = () => {
    if (handleGoBack) {
      handleGoBack();
    } else {
      navigate(-1);
    }
  };

  return (
    <DefaultLayout
      pageTitle={"카드 추가"}
      showBackButton={true}
      onBackButtonClick={handleGoBackClick}
    >
      <CardPreview
        cardNumber="1234 5678 9012 3456"
        ownerName="김재원"
        expirationDate="12/23"
      />
      <CardNumberInput value="" onChange={() => {}} />
      <CardExpirationDateInput />
      <CardOwnerNameInput value="" />
      <CardSecurityCodeInput />
      <CardPasswordFirstTwoDigitsInput />
      <CardSubmitButton />
    </DefaultLayout>
  );
};

export default CardAddPage;
