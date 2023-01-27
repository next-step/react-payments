import { InputBox, InputInvalidMessage } from "../../../../../components";
import { useCardNumbers, useCardNumberVirtualKeypad } from "./hooks";
import CardNumber from "./CardNumber";

interface IProps {
  focusNext: () => void;
  invalidMessage?: string;
}

export default function CardNumbers({ focusNext, invalidMessage }: IProps) {
  const { refs, handleInputNumber, focusHandlers } = useCardNumbers();
  const { handleFocus } = useCardNumberVirtualKeypad(handleInputNumber);

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
          onFocus={handleFocus}
        />
        -
        <CardNumber
          ref={refs[3]}
          nativeType="password"
          focusNext={focusNext}
          onInput={handleInputNumber}
          onFocus={handleFocus}
        />
      </InputBox>
      <InputInvalidMessage>{invalidMessage}</InputInvalidMessage>
    </>
  );
}
