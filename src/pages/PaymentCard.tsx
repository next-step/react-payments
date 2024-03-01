import { useState } from "react";

import { CurrentPage } from "common/types/page.type";
import { CardInfo } from "common/types/card.type";

import SuccessAddCard from "pages/SuccessAddCard";
import CardList from "pages/CardList";
import AddCard from "pages/AddCard";

function PaymentCard() {
  const [currentPage, setCurrentPage] = useState<CurrentPage>("addCard");

  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: "",
    expireDate: "",
    cardOwner: "",
    cvc: "",
    password: "",
  });

  const handleChangeCurrentPage = (page: CurrentPage) => {
    setCurrentPage(page);
  };

  const handleCardInfoChange = (key: keyof CardInfo, value: string) => {
    setCardInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <>
      {currentPage === "addCard" && (
        <AddCard
          onChangePage={handleChangeCurrentPage}
          onChangeCardInfo={handleCardInfoChange}
          {...cardInfo}
        />
      )}
      {currentPage === "addCardSuccess" && (
        <SuccessAddCard {...cardInfo} onChangePage={handleChangeCurrentPage} />
      )}
      {currentPage === "cardList" && <CardList />}
    </>
  );
}

export default PaymentCard;
