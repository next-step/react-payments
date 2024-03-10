import { Input, InputProps } from "../../../../components/ui-kit/Input";
import { GoDotFill } from "react-icons/go";
import Dot from "./Dot";

const INPUT_WIDTH = "40px";
const INPUT_MAX_LENGTH = 1;

interface CardPasswordInputProps {
  firstValue: string;
  secondValue: string;
  onFirstValueChange: InputProps["onChange"];
  onSecondValueChange: InputProps["onChange"];
}

export default function CardPasswordInput({
  firstValue,
  secondValue,
  onFirstValueChange,
  onSecondValueChange,
}: CardPasswordInputProps) {
  return (
    <Input.Wrapper>
      <Input.Label label="카드 비밀번호" />
      <Input
        variant="basic"
        value={firstValue}
        onChange={onFirstValueChange}
        type="password"
        maxLength={INPUT_MAX_LENGTH}
        width={INPUT_WIDTH}
      >
        <Input
          variant="basic"
          value={secondValue}
          onChange={onSecondValueChange}
          type="password"
          maxLength={INPUT_MAX_LENGTH}
          width={INPUT_WIDTH}
        />
        <Dot width={INPUT_WIDTH} color="#94dacd" />
        <Dot width={INPUT_WIDTH} color="#94dacd" />
      </Input>
    </Input.Wrapper>
  );
}
