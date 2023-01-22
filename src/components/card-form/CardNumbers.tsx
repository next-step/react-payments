import { useCallback } from "react";
import { InputBox } from "../atoms";
import { isCardNumber } from "../../domain";
import { useCardFormFocus } from "./hooks";
import CardNumber from "./CardNumber";
import { useCardFormContext } from "./providers";

interface IProps {
  focusNext: () => void;
}

const REF_SIZE = 4;

export default function CardNumbers({ focusNext }: IProps) {
  const {
    refs: [$first, $second, $third, $fourth],
    createFocusHandler,
  } = useCardFormFocus(REF_SIZE);
  const { changeCardState } = useCardFormContext();

  const focusSecond = createFocusHandler($second);
  const focusThird = createFocusHandler($third);
  const focusFourth = createFocusHandler($fourth);

  const handleInputNumber = useCallback(() => {
    const numbers = [
      $first.current?.value || "",
      $second.current?.value || "",
      $third.current?.value || "",
      $fourth.current?.value || "",
    ].filter(isCardNumber);

    changeCardState({ numbers });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [changeCardState]);

  return (
    <InputBox>
      <CardNumber
        ref={$first}
        focusNext={focusSecond}
        onInput={handleInputNumber}
      />
      -
      <CardNumber
        ref={$second}
        focusNext={focusThird}
        onInput={handleInputNumber}
      />
      -
      <CardNumber
        ref={$third}
        type="password"
        focusNext={focusFourth}
        onInput={handleInputNumber}
      />
      -
      <CardNumber
        ref={$fourth}
        type="password"
        focusNext={focusNext}
        onInput={handleInputNumber}
      />
    </InputBox>
  );
}
