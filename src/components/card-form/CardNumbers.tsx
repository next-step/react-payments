import { Input, InputBox } from "../atoms";
import { useCardNumbers } from "./hooks";

interface IProps {
  focusNext: () => void;
}

export default function CardNumbers({ focusNext }: IProps) {
  const [$first, $second, $third, $fourth] = useCardNumbers(focusNext);

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
