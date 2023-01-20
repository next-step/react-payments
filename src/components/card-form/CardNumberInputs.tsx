import React from "react";
import CardNumberInput from "./CardNumberInput";
import { useCardNumbers } from "./hooks";
import { ICard } from "../../domain";

interface IProps {
  changeCardState: (newCardState: Partial<ICard>) => void;
}

export default function CardNumberInputs({ changeCardState }: IProps) {
  const [$first, $second, $third, $fourth] = useCardNumbers(changeCardState);

  return (
    <div className="input-box">
      <CardNumberInput ref={$first} />
      -
      <CardNumberInput ref={$second} />
      -
      <CardNumberInput ref={$third} type="password" />
      -
      <CardNumberInput ref={$fourth} type="password" />
    </div>
  );
}
