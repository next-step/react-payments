import { ChangeEventHandler, useEffect, useState } from "react";
import { MAX_CARD_SECURITY_CODE_LENGTH } from "../../constants/card";
import { hasNonNumberChar } from "../../utils/validations";
import Styled from "./CardSecurityCodeInput.styles";

interface Props {
  onChange?: (code: string) => void;
}

const CardSecurityCodeInput = ({ onChange }: Props) => {
  const [value, setValue] = useState("");

  const _onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { value } = event.target;

    if (hasNonNumberChar(value)) {
      return;
    }

    setValue(value);
  };

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <Styled.InputWrapper label="보안코드(CVC/CVV)">
      <input type="password" value={value} onChange={_onChange} maxLength={MAX_CARD_SECURITY_CODE_LENGTH} />
    </Styled.InputWrapper>
  );
};

export default CardSecurityCodeInput;
export { Props };
