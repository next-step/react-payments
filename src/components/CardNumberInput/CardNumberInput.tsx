import { ChangeEvent, useState, useEffect } from "react";

import { CardNumber } from "../../@types";
import { MAX_CARD_NUMBER_LENGTH } from "../../constants/card";
import { hasNonNumberChar } from "../../utils/validations";
import Styled from "./CardNumberInput.styles";

interface Props {
  onChange?: (cardNumber: CardNumber) => void;
}

const CardNumberInput = ({ onChange }: Props) => {
  const [cardNumber, setCardNumber] = useState<CardNumber>(["", "", "", ""]);

  const makeChangeHandlerByIndex = (index: number) => (event: ChangeEvent<HTMLInputElement>) => {
    const updatedCardNumber: CardNumber = [...cardNumber];
    const { value } = event.target;

    if (hasNonNumberChar(value)) {
      return;
    }

    updatedCardNumber[index] = value;
    setCardNumber(updatedCardNumber);
  };

  useEffect(() => {
    onChange?.(cardNumber);
  }, [cardNumber]);

  return (
    <Styled.InputWrapper label={"카드번호"}>
      <input
        type="text"
        inputMode="numeric"
        value={cardNumber[0]}
        onChange={makeChangeHandlerByIndex(0)}
        maxLength={MAX_CARD_NUMBER_LENGTH}
      />
      -
      <input
        type="text"
        inputMode="numeric"
        value={cardNumber[1]}
        onChange={makeChangeHandlerByIndex(1)}
        maxLength={MAX_CARD_NUMBER_LENGTH}
      />
      -
      <input
        type="password"
        inputMode="numeric"
        value={cardNumber[2]}
        onChange={makeChangeHandlerByIndex(2)}
        maxLength={MAX_CARD_NUMBER_LENGTH}
      />
      -
      <input
        type="password"
        inputMode="numeric"
        value={cardNumber[3]}
        onChange={makeChangeHandlerByIndex(3)}
        maxLength={MAX_CARD_NUMBER_LENGTH}
      />
    </Styled.InputWrapper>
  );
};

export default CardNumberInput;
export { Props };
