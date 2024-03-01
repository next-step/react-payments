import { useState } from "react";

import Card from "common/components/card/Card";
import BasicLayout from "common/layout/BasicLayout";
import { CurrentPage } from "common/types/page.type";

import InputCardForm from "features/card/components/InputCardForm";
import Button from "common/components/button/Button";
import Title from "common/components/title/Title";

export interface CardInfo {
  cardNumber: string;
  expireDate: string;
  cardOwner: string;
  cvc: string;
  password: string;
}

interface AddCardProps {
  onChangePage: (page: CurrentPage) => void;
}

export default function AddCard({ onChangePage }: AddCardProps) {
  const [cardInfo, setCardInfo] = useState<CardInfo>({
    cardNumber: "",
    expireDate: "",
    cardOwner: "",
    cvc: "",
    password: "",
  });

  const handleCardInfoChange = (key: keyof CardInfo, value: string) => {
    setCardInfo((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <BasicLayout>
      <Title
        button={
          <span
            className="button-text"
            onClick={() => onChangePage("cardList")}
          >
            {"<"}
          </span>
        }
      >
        카드 추가
      </Title>
      <Card {...cardInfo} />
      <InputCardForm onCardInfoChange={handleCardInfoChange} {...cardInfo} />
      <Button onClick={() => onChangePage("addCardSuccess")}>다음</Button>
    </BasicLayout>
  );
}
