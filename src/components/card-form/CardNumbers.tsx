import { ICard } from "../../domain";
import { Input, InputBox } from "../atoms";
import { useCardNumbers } from "./hooks";

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
      <Input ref={$first} required />
      -
      <Input ref={$second} required />
      -
      <Input ref={$third} type="password" required />
      -
      <Input ref={$fourth} type="password" required />
    </InputBox>
  );
}
