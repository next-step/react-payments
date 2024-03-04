import { getNumberString } from "../../util/regExp";

export default function SecurityCodeInput({ securityCode, setSecurityCode }) {
  const onChangeSecurityCode = (event) => {
    const { value } = event.target;

    const onlyNumberValue = getNumberString(value);

    setSecurityCode(onlyNumberValue);
  };

  return (
    <input
      value={securityCode}
      onChange={onChangeSecurityCode}
      className="input-basic w-25"
      type="password"
      maxLength="3"
    />
  );
}
