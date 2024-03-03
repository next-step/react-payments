import Button from "common/components/button/Button";
import Card from "common/components/card";
import Title from "common/components/title/Title";
import Layout from "common/components/layout";
import { CardInfo } from "common/types/card.type";
import { CurrentPage } from "common/types/page.type";

interface SuccessAddCardProps extends CardInfo {
  onChangePage: (page: CurrentPage) => void;
}

export default function SuccessAddCard({
  onChangePage,
  ...cardInfo
}: SuccessAddCardProps) {
  const { cardNumber, cardOwner, expireDate } = cardInfo;

  return (
    <Layout.Success>
      <Title className="page-title mb-10">카드등록이 완료되었습니다.</Title>
      <Card.Big
        cardNumber={cardNumber}
        cardOwner={cardOwner}
        expireDate={expireDate}
      />
      <Button onClick={() => onChangePage("cardList")}>확인</Button>
    </Layout.Success>
  );
}
