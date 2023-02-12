import {
  Button,
  ButtonBox,
  Form,
  Input,
  InputContainer,
} from "../../../components";
import { useCardNicknameForm } from "./hooks";

const MAX_LENGTH = 10;

export default function CardNicknameForm() {
  const { handleSubmit, handleInputNickname, defaultValue } =
    useCardNicknameForm();

  return (
    <Form onSubmit={handleSubmit}>
      <InputContainer className="flex-center w-100">
        <Input
          className="w-75"
          type="underline"
          placeholder="카드 별칭 (선택)"
          maxLength={MAX_LENGTH}
          defaultValue={defaultValue}
          onInput={handleInputNickname}
        />
      </InputContainer>

      <ButtonBox className="mt-50">
        <Button nativeType="submit" className="button-text">
          다음
        </Button>
      </ButtonBox>
    </Form>
  );
}
