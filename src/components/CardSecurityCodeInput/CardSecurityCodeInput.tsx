import { useEffect, useState } from "react";
import { MAX_CARD_SECURITY_CODE_LENGTH } from "../../constants/card";
import IntegerInput from "../IntegerInput/IntegerInput";
import Styled from "./CardSecurityCodeInput.styles";

interface Props {
  onChange?: (code: string) => void;
}

const CardSecurityCodeInput = ({ onChange }: Props) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    onChange?.(value);
  }, [value]);

  return (
    <Styled.InputWrapper label="보안코드(CVC/CVV)">
      <IntegerInput type="password" value={value} onChange={setValue} maxLength={MAX_CARD_SECURITY_CODE_LENGTH} />
    </Styled.InputWrapper>
  );
};

export default CardSecurityCodeInput;
export { Props };
