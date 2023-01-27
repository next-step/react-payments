import { ComponentProps, useMemo } from "react";
import { Button, ButtonBox, Form, InputContainer } from "../../../components";
import { TInvalidCode } from "../../../domain";
import { useFocusHandler, useInputRefs } from "./hooks";
import {
  CardExpiryDate,
  CardNumbers,
  CardOwner,
  CardPassword,
  CardSecurityCode,
} from "./parts";

const REF_SIZE = 3;

interface IProps {
  onSubmit: ComponentProps<typeof Form>["onSubmit"];
  invalidMessages: Partial<Record<TInvalidCode, string>>;
}

export default function CardEditBaseForm({
  onSubmit,
  invalidMessages,
}: IProps) {
  const [$cardExpired, $cardOwner, $cardPassword] = useInputRefs(REF_SIZE);
  const createFocusHandler = useFocusHandler();
  const invalidButton = useMemo(
    () => Object.keys(invalidMessages).length > 0,
    [invalidMessages]
  );

  return (
    <Form onSubmit={onSubmit}>
      <InputContainer title="카드 번호">
        <CardNumbers
          focusNext={createFocusHandler($cardExpired)}
          invalidMessage={invalidMessages.InvalidCardNumbers}
        />
      </InputContainer>

      <InputContainer title="만료일">
        <CardExpiryDate
          ref={$cardExpired}
          focusNext={createFocusHandler($cardOwner)}
          invalidMessage={invalidMessages.InvalidExpiryDate}
        />
      </InputContainer>

      <InputContainer title="카드 소유자 이름(선택)">
        <CardOwner
          ref={$cardOwner}
          invalidMessage={invalidMessages.InvalidOwner}
        />
      </InputContainer>

      <InputContainer title="보안코드(CVC/CVV)">
        <CardSecurityCode
          focusNext={createFocusHandler($cardPassword)}
          invalidMessage={invalidMessages.InvalidSecurityCode}
        />
      </InputContainer>

      <InputContainer title="카드 비밀번호">
        <CardPassword
          ref={$cardPassword}
          invalidMessage={invalidMessages.InvalidPassword}
        />
      </InputContainer>

      <ButtonBox>
        <Button
          invalid={invalidButton}
          disabled={invalidButton}
          nativeType="submit"
          className="button-text"
        >
          다음
        </Button>
      </ButtonBox>
    </Form>
  );
}
