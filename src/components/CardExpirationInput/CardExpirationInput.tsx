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

  const handleChangeMonth = (value: string) => {
    const valueAsNumber = Number(value);
    console.log(value);

    if (value && !Number.isInteger(valueAsNumber)) {
      return;
    }

    if (value && (valueAsNumber < 1 || valueAsNumber > 12)) {
      return;
    }

    setExpiration((prev) => ({
      ...prev,
      month: value,
    }));
  };

  const handleChangeYear = (value: string) => setExpiration((prev) => ({ ...prev, year: value }));

  useEffect(() => {
    onChange?.(expiration.month, expiration.year);
  }, [expiration]);

  return (
    <Styled.InputWrapper label="만료일">
      <IntegerInput
        type="text"
        value={expiration.month}
        onChange={handleChangeMonth}
        maxLength={MAX_CARD_EXPIRATION_VALUE_LENGTH}
      />
      /
      <IntegerInput
        type="text"
        value={expiration.year}
        onChange={handleChangeYear}
        maxLength={MAX_CARD_EXPIRATION_VALUE_LENGTH}
      />
    </Styled.InputWrapper>
  );
};

export default CardExpirationInput;
export { Props };
