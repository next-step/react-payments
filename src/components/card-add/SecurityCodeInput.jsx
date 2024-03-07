import { getNumberString } from "../../util/regExp";
import Input from "../atomic-design-pattern/atom/Input";

export default function SecurityCodeInput({ securityCode, setSecurityCode }) {
  const onChangeSecurityCode = (event) => {
    const { value } = event.target;

    const onlyNumberValue = getNumberString(value);

    setSecurityCode(onlyNumberValue);
  };

  return (
    <Input
      value={securityCode}
      onChange={onChangeSecurityCode}
      className="w-25"
      type="password"
      maxLength="3"
    />
  );
}
