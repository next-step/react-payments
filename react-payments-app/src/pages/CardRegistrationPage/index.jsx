import { useState } from "react";
import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardNumbersInput from "../../components/Input/CardNumbers/input";
import CardExpirationDateInput from "../../components/Input/CardExpirationDate/input";
import CardOwnerInput from "../../components/Input/CardOwner/input";
import CardPasswordInput from "../../components/Input/CardPassword/input";
import CardCVCInput from "../../components/Input/CardSecurityCode/input";

const CardRegistration = () => {
  return (
    <div>
      <Header pageTitle={"카드추가"} headerIcon={"<"} />
      <Card
        cardStatus={"empty-card"}
        userName={"JEONG"}
        expirationDate={"12/34"}
      />
      <CardNumbersInput />
      <CardExpirationDateInput />
      <CardOwnerInput />
      <CardCVCInput />
      <CardPasswordInput />
      <div class="button-box">
        <span class="button-text">다음</span>
      </div>
    </div>
  );
};

export default CardRegistration;
