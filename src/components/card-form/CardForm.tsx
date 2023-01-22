import { Button, ButtonBox, Form, InputContainer } from "../atoms";
import { Card } from "../card";
import { useRefsWithFocusHandler } from "./hooks";
import { CardFormProvider } from "./providers";
import {
  CardExpiryDate,
  CardNumbers,
  CardOwner,
  CardPassword,
  CardSecurityCode,
} from "./parts";

const REF_SIZE = 3;

export default function CardForm() {
  const {
    refs: [$cardExpired, $cardOwner, $cardPassword],
    createFocusHandler,
  } = useRefsWithFocusHandler(REF_SIZE);

  return (
    <CardFormProvider>
      {(cardState) => (
        <Form>
          <Card {...cardState} />

          <InputContainer title="카드 번호">
            <CardNumbers focusNext={createFocusHandler($cardExpired)} />
          </InputContainer>

          <InputContainer title="만료일">
            <CardExpiryDate
              ref={$cardExpired}
              focusNext={createFocusHandler($cardOwner)}
            />
          </InputContainer>

          <InputContainer title="카드 소유자 이름(선택)">
            <CardOwner ref={$cardOwner} />
          </InputContainer>

          <InputContainer title="보안코드(CVC/CVV)">
            <CardSecurityCode focusNext={createFocusHandler($cardPassword)} />
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
