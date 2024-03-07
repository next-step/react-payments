import { CurrentPage } from "common/types/page.type";
import Layout from "common/components/layout";
import Button from "common/components/button/Button";
import Title from "common/components/title/Title";

import { CardInfo } from "features/card/types/card.type";
import InputCardForm from "features/card/components/InputCardForm";
import Card from "common/components/card/Card";

interface AddCardProps extends CardInfo {
  onChangePage: (page: CurrentPage) => void;
  onChangeCardInfo: (key: keyof CardInfo, value: string) => void;
}

export default function AddCard({ onChangePage, onChangeCardInfo, ...cardInfo }: AddCardProps) {
  return (
    <Layout.Basic>
      <Title
        button={
          <span className="button-text" onClick={() => onChangePage("cardList")}>
            &lt;
          </span>
        }
      >
        카드 추가
      </Title>
      <Card mode="preview" {...cardInfo} />
      <InputCardForm onCardInfoChange={onChangeCardInfo} {...cardInfo} />
      <Button onClick={() => onChangePage("addCardSuccess")}>다음</Button>
    </Layout.Basic>
  );
}
