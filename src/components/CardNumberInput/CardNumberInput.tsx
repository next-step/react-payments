import { ChangeEvent, useState, useEffect } from "react";

import { CardNumber } from "../../@types";
import { MAX_CARD_NUMBER_LENGTH } from "../../constants/card";
import Styled from "./CardNumberInput.styles";

interface Props {
  onCardNumberChange: (cardNumber: CardNumber) => void;
}

const isInvalidCardNumber = (value: string) => {
  const hasInvalidToken = /[^0-9]|[-.]/.test(value);
  const isExceededCardNumberLimit = value.length > MAX_CARD_NUMBER_LENGTH;

  return hasInvalidToken || isExceededCardNumberLimit;
};

const CardNumberInput = ({ onCardNumberChange }: Props) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(["", "", "", ""]);

  const makeChangeHandlerByIndex = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCardNumber: CardNumber = [...cardNumber];
    const { value } = event.target;

    if (isInvalidCardNumber(value)) {
      return;
    }

    updatedCardNumber[index] = value;
    setCardNumber(updatedCardNumber);
  };

  useEffect(() => {
    onCardNumberChange(cardNumber);
  }, [cardNumber]);

  return (
    <Styled.InputWrapper label={"카드번호"}>
      <input type="text" inputMode="numeric" value={cardNumber[0]} onChange={makeChangeHandlerByIndex(0)} />
      -
      <input type="text" inputMode="numeric" value={cardNumber[1]} onChange={makeChangeHandlerByIndex(1)} />
      -
      <input type="password" inputMode="numeric" value={cardNumber[2]} onChange={makeChangeHandlerByIndex(2)} />
      -
      <input type="password" inputMode="numeric" value={cardNumber[3]} onChange={makeChangeHandlerByIndex(3)} />
    </Styled.InputWrapper>
  );
};

export default CardNumberInput;
export { Props };
