import CardNumberInput from "./CardNumber";
import { useCardNumbers } from "./hooks";
import { ICard } from "../../domain";
import { InputBox } from "../atoms";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
  focusNext: () => void;
}

export default function CardNumbers({ changeCardState, focusNext }: IProps) {
  const [$first, $second, $third, $fourth] = useCardNumbers(
    changeCardState,
    focusNext
  );

  return (
    <InputBox>
      <CardNumberInput ref={$first} />
      -
      <CardNumberInput ref={$second} />
      -
      <CardNumberInput ref={$third} type="password" />
      -
      <CardNumberInput ref={$fourth} type="password" />
    </InputBox>
  );
}
