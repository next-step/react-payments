import { useRef } from "react";
import { Button, ButtonBox, Form, InputContainer } from "../atoms";
import { Card } from "../card";
import { CardFormProvider } from "./providers";
import CardNumbers from "./CardNumbers";
import CardExpired from "./CardExpired";
import CardSecurityCode from "./CardSecurityCode";
import CardOwner from "./CardOwner";
import CardPassword from "./CardPassword";

export default function CardForm() {
  const $cardExpired = useRef<HTMLInputElement>(null);
  const $cardOwner = useRef<HTMLInputElement>(null);
  const $cardPassword = useRef<HTMLInputElement>(null);

  return (
    <CardFormProvider>
      {(cardState) => (
        <Form>
          <Card {...cardState} />

          <InputContainer title="카드 번호">
            <CardNumbers focusNext={() => $cardExpired.current?.focus()} />
          </InputContainer>

          <InputContainer title="만료일">
            <CardExpired
              ref={$cardExpired}
              focusNext={() => $cardOwner.current?.focus()}
            />
          </InputContainer>

          <InputContainer title="카드 소유자 이름(선택)">
            <CardOwner ref={$cardOwner} />
          </InputContainer>

          <InputContainer title="보안코드(CVC/CVV)">
            <CardSecurityCode
              focusNext={() => $cardPassword.current?.focus()}
            />
          </InputContainer>

          <InputContainer title="카드 비밀번호">
            <CardPassword ref={$cardPassword} />
          </InputContainer>

          <ButtonBox>
            <Button nativeType="submit" className="button-text">
              다음
            </Button>
          </ButtonBox>
        </Form>
      )}
    </CardFormProvider>
  );
}
