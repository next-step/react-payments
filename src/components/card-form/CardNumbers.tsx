import { useCardNumbers } from "./hooks";
import { ICard } from "../../domain";
import { Input, InputBox } from "../atoms";

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
      <Input ref={$first} />
      -
      <Input ref={$second} />
      -
      <Input ref={$third} type="password" />
      -
      <Input ref={$fourth} type="password" />
    </InputBox>
  );
}
