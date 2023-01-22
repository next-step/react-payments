import { InputBox } from "../../../atoms";
import { useCardNumbers } from "./hooks";
import CardNumber from "./CardNumber";

interface IProps {
  focusNext: () => void;
}

export default function CardNumbers({ focusNext }: IProps) {
  const {
    refs: [$first, $second, $third, $fourth],
    createFocusHandler,
    handleInputNumber,
  } = useCardNumbers();

  const focusSecond = createFocusHandler($second);
  const focusThird = createFocusHandler($third);
  const focusFourth = createFocusHandler($fourth);

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
