import * as InputStyle from "../../style/input";

import Input from "../Input";

import isNotNumber from "../utils/isNotNumber";

export default function CardSecurityNumberInput({ value, onChange }) {
  const handleChange = ({ name, value }) => {
    if (isNotNumber(value)) {
      return;
    }

    onChange({ name, value });
  };

  return (
    <InputStyle.Container>
      <InputStyle.Label htmlFor="security-number">
        보안코드(CVC/CVV)
      </InputStyle.Label>
      <Input
        id="security-number"
        type="password"
        name="securityNumber"
        value={value}
        maxLength={3}
        onChange={handleChange}
        background
      />
    </InputStyle.Container>
  );
}
