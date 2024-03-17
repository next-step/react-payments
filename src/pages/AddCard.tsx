import { CardContext } from "../App";

import Layout from "common/components/layout";
import Button from "common/components/button/Button";
import Title from "common/components/title/Title";
import Card from "common/components/card/Card";

import InputCardForm from "features/card/components/InputCardForm";

export default function AddCard() {
  const cardActionRef = CardContext.useActorRef();

  return (
    <Layout.Basic>
      <Title
        button={
          <span
            className="button-text"
            onClick={() =>
              cardActionRef.send({ type: "STEP", value: "cardList" })
            }
          >
            &lt;
          </span>
        }
      >
        카드 추가
      </Title>
      <Card mode="preview" />
      <InputCardForm />
      <Button
        onClick={() => {
          cardActionRef.send({ type: "STEP", value: "addCardSuccess" });
        }}
      >
        다음
      </Button>
    </Layout.Basic>
  );
}
