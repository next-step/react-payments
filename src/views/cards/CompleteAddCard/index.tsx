import React from "react";

import { Card } from "@/components/cards";
import type { CardInfo } from "@/components/cards/Card";
import { Button, Input } from "@/components/common";
import { CardPageLayout } from "@/layouts/cards";

import * as S from "./completeAddCard";

const mockCardInfo: CardInfo = {
  cardName: "",
  cardOwnerName: "LeeJaeyun",
  expireDate: "11/22",
  cardNumber: {
    num1: "1111",
    num2: "1111",
    num3: "1111",
    num4: "1111",
  },
};

export default function CompleteAddCard() {
  return (
    <CardPageLayout>
      <S.CompletedCardWrapper>
        <S.CompleteCardLabel>카드등록이 완료되었습니다.</S.CompleteCardLabel>
        <Card size="big" cardInfo={mockCardInfo} />
        <Input variant="underlined" textAlign="center" />
      </S.CompletedCardWrapper>
      <S.CompleteCardButtonWrapper>
        <Button>확인</Button>
      </S.CompleteCardButtonWrapper>
    </CardPageLayout>
  );
}
