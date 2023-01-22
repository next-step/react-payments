import { isCardNumber } from "../../../../domain";
import { useCardFormContext } from "../../providers";
import useCardNumber from "./useCardNumber";

export default function useCardNumbers(focusNext: () => void) {
  const { changeCardState } = useCardFormContext();
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
