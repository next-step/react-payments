import { useEffect, useState } from "react";
import { CardExpiration } from "../../@types";
import { MAX_CARD_EXPIRATION_VALUE_LENGTH } from "../../constants/card";
import IntegerInput from "../IntegerInput/IntegerInput";
import Styled from "./CardExpirationInput.styles";

interface Props {
  onChange?: (month: string, year: string) => void;
}

const CardExpirationInput = ({ onChange }: Props) => {
  const [expiration, setExpiration] = useState<CardExpiration>({ month: "", year: "" });

  const makeChangeHandlerByKey = (key: keyof CardExpiration) => (value: string) => {
    setExpiration((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  useEffect(() => {
    onChange?.(expiration.month, expiration.year);
  }, [expiration]);

  return (
    <Styled.InputWrapper label="만료일">
      <IntegerInput
        type="text"
        value={expiration.month}
        onChange={makeChangeHandlerByKey("month")}
        maxLength={MAX_CARD_EXPIRATION_VALUE_LENGTH}
      />
      /
      <IntegerInput
        type="text"
        value={expiration.year}
        onChange={makeChangeHandlerByKey("year")}
        maxLength={MAX_CARD_EXPIRATION_VALUE_LENGTH}
      />
    </Styled.InputWrapper>
  );
};

export default CardExpirationInput;
export { Props };
