import { ChangeEvent, useEffect, useState } from "react";
import { CardExpiration } from "../../@types";
import { MAX_CARD_EXPIRATION_VALUE_LENGTH } from "../../constants/card";
import Styled from "./CardExpirationInput.styles";

interface Props {
  onCardExpirationChange: (month: string, year: string) => void;
}

const isInvalidExpirationValue = (value: string) => {
  const hasInvalidToken = /[^0-9]|[-.]/.test(value);
  const isExceededValueLengthLimit = value.length > MAX_CARD_EXPIRATION_VALUE_LENGTH;

  return hasInvalidToken || isExceededValueLengthLimit;
};

const CardExpirationInput = ({ onCardExpirationChange }: Props) => {
  const [expiration, setExpiration] = useState<CardExpiration>({ month: "", year: "" });

  const makeChangeHandlerByKey = (key: keyof CardExpiration) => (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (isInvalidExpirationValue(value)) {
      return;
    }

    setExpiration((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    onCardExpirationChange(expiration.month, expiration.year);
  }, [expiration]);

  return (
    <Styled.InputWrapper label="만료일">
      <input type="text" value={expiration.month} onChange={makeChangeHandlerByKey("month")} />
      /
      <input type="text" value={expiration.year} onChange={makeChangeHandlerByKey("year")} />
    </Styled.InputWrapper>
  );
};

export default CardExpirationInput;
export { Props };
