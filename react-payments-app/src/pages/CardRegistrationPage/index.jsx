import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useCard } from "../../store/CardContext";
import { MAX_INPUT_LENGTH } from "../../common/constant";

import Header from "../../components/Header/Header";
import Card from "../../components/Card/Card";
import CardForm from "../../components/Input/CardForm";

const CardRegistration = () => {
  const navigate = useNavigate();
  const { card, setCard } = useCard();

  const goBackToListPage = (e) => {
    navigate("/");
  };

  const isAllFilledOut = (cardInfo) => {
    const { cardNumbers, expirationDate, password, CVC } = cardInfo;

    return (
      CVC.length === MAX_INPUT_LENGTH.CVC &&
      cardNumbers.every(
        (part) => part.length === MAX_INPUT_LENGTH.CARD_NUMBER
      ) &&
      expirationDate.every((part) => part.length === MAX_INPUT_LENGTH.DATE)
      // TODO: fix. pw[1] is empty.
      // &&password.every((part) => part.length === MAX_INPUT_LENGTH.PW)
    );
  };

  const handleSubmit = (cardInfo) => {
    if (!isAllFilledOut(cardInfo)) {
      alert("빈칸을 모두 채워주세요.");
      return;
    }
    setCard(cardInfo);
    navigate("/registration/setCardNickname");
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
      <CardForm onSubmit={handleSubmit} />
    </>
  );
};

export default CardRegistration;
