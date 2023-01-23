import { InputBox } from "../../../../../components/atoms";
import { InputInvalidMessage } from "../../../../../components";
import { useCardNumbers } from "./hooks";
import CardNumber from "./CardNumber";

interface IProps {
  focusNext: () => void;
  invalidMessage?: string;
}

export default function CardNumbers({ focusNext, invalidMessage }: IProps) {
  const { refs, handleInputNumber, focusHandlers } = useCardNumbers();

  return (
    <>
      <InputBox>
        <CardNumber
          ref={refs[0]}
          focusNext={focusHandlers[0]}
          onInput={handleInputNumber}
        />
        -
        <CardNumber
          ref={refs[1]}
          focusNext={focusHandlers[1]}
          onInput={handleInputNumber}
        />
        -
        <CardNumber
          ref={refs[2]}
          nativeType="password"
          focusNext={focusHandlers[2]}
          onInput={handleInputNumber}
        />
        -
        <CardNumber
          ref={refs[3]}
          nativeType="password"
          focusNext={focusNext}
          onInput={handleInputNumber}
        />
      </InputBox>
      <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
    </>
  );
}
