import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardForm from "../../components/Input/CardForm";
import CardNumbersInput from "../../components/Input/CardNumbers/input";
import CardExpirationDateInput from "../../components/Input/CardExpirationDate/input";
import CardOwnerInput from "../../components/Input/CardOwner/input";
import CardCVCInput from "../../components/Input/CardSecurityCode/input";
import CardPasswordInput from "../../components/Input/CardPassword/input";

const CardRegistration = () => {
  const navigate = useNavigate();

  const goBackToListPage = (e) => {
    navigate("/");
  };

  return (
    <>
      <Header
        pageTitle={"카드추가"}
        headerIcon={"<"}
        onClick={goBackToListPage}
      />
      <Card
        cardStatus={"empty-card"}
        userName={"JEONG"}
        expirationDate={"12/34"}
      />
      <CardForm>
        <CardNumbersInput />
        <CardExpirationDateInput />
        <CardOwnerInput />
        <CardCVCInput />
        <CardPasswordInput />
      </CardForm>
    </>
  );
};

export default CardRegistration;
