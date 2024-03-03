import { CardInfo } from "common/types/card.type";
import { CurrentPage } from "common/types/page.type";
import Layout from "common/layout";
import Button from "common/components/button/Button";
import Title from "common/components/title/Title";
import Card from "common/components/card";

import InputCardForm from "features/card/components/InputCardForm";

interface AddCardProps extends CardInfo {
  onChangePage: (page: CurrentPage) => void;
  onChangeCardInfo: (key: keyof CardInfo, value: string) => void;
}

export default function AddCard({
  onChangePage,
  onChangeCardInfo,
  ...cardInfo
}: AddCardProps) {
  return (
    <Layout.Basic>
      <Title
        button={
          <span
            className="button-text"
            onClick={() => onChangePage("cardList")}
          >
            &lt;
          </span>
        }
      >
        카드 추가
      </Title>
      <Card.Small {...cardInfo} />
      <InputCardForm onCardInfoChange={onChangeCardInfo} {...cardInfo} />
      <Button onClick={() => onChangePage("addCardSuccess")}>다음</Button>
    </Layout.Basic>
  );
}
