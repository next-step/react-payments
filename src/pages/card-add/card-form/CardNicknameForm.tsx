import {
  Button,
  ButtonBox,
  Form,
  Input,
  InputContainer,
} from "../../../components";
import { useCardNicknameForm } from "./hooks";

export default function CardNicknameForm() {
  const { handleSubmit, handleInputNickname, invalidButton } =
    useCardNicknameForm();

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer className="flex-center w-100">
        <Input
          className="w-75"
          type="underline"
          placeholder="카드의 별칭을 입력해주세요."
          onInput={handleInputNickname}
        />
      </InputContainer>

      <ButtonBox className="mt-50">
        <Button
          nativeType="submit"
          className="button-text"
          invalid={invalidButton}
          disabled={invalidButton}
        >
          다음
        </Button>
      </ButtonBox>
    </Form>
  );
}
