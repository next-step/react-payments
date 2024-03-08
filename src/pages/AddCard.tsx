import { CurrentPage } from "common/types/page.type";
import Layout from "common/components/layout";
import Button from "common/components/button/Button";
import Title from "common/components/title/Title";
import Card from "common/components/card/Card";

import InputCardForm from "features/card/components/InputCardForm";

interface AddCardProps {
  onChangePage: (page: CurrentPage) => void;
}

export default function AddCard({ onChangePage }: AddCardProps) {
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
      <Card mode="preview" />
      <InputCardForm />
      <Button onClick={() => onChangePage("addCardSuccess")}>다음</Button>
    </Layout.Basic>
  );
}
