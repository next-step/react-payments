import useCardNumber from "./useCardNumber";
import { ICard, isCardNumber } from "../../../../domain";

export default function useCardNumbers(
  changeCardState: (newCardState: Partial<ICard>) => void,
  focusNext: () => void
) {
  const changeNumbers = () => {
    const cardNumbers = [
      $first.current?.value || "",
      $second.current?.value || "",
      $third.current?.value || "",
      $fourth.current?.value || "",
    ].filter(isCardNumber);

    changeCardState({ numbers: cardNumbers });
  };

  const $first = useCardNumber(changeNumbers, () => $second.current?.focus());
  const $second = useCardNumber(changeNumbers, () => $third.current?.focus());
  const $third = useCardNumber(changeNumbers, () => $fourth.current?.focus());
  const $fourth = useCardNumber(changeNumbers, focusNext);

  return [$first, $second, $third, $fourth];
}
