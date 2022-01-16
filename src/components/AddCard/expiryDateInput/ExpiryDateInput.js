import styled from "@emotion/styled";

import { EXPIRY_DATE_LABEL } from "../constants";

import InputWithLabel from "../InputBox/InputWithLabel";

import isFullField from "../utils/isFullField";

import useExpiryDateFieldsRef from "./hooks/useExpiryDateFieldsRef";

const ExpiryDateInput = ({ fields, onChange }) => {
  const { monthField, yearField } = fields;

  const { monthInput, yearInput } = useExpiryDateFieldsRef({
    fields,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({ maxLength: 2, key: "expiryDate", name, value });
  };

  return (
    <InputWithLabel id="expiry-date" label="만료일">
      <Item>
        <Input
          aria-label={EXPIRY_DATE_LABEL.month}
          ref={monthInput}
          id="expiry-date"
          type="number"
          name="monthField"
          placeholder="MM"
          value={monthField}
          onChange={handleChange}
        />
      </Item>
      <Item fullField={isFullField(monthField)}>
        <Input
          aria-label={EXPIRY_DATE_LABEL.year}
          ref={yearInput}
          type="number"
          name="yearField"
          placeholder="YY"
          value={yearField}
          onChange={handleChange}
        />
      </Item>
    </InputWithLabel>
  );
};

const Item = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  flex: 1;

  &:before {
    ${({ fullField }) =>
      fullField &&
      `
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        opacity: 1;
        content: "-";
      `}
  }
`;

const Input = styled.input`
  flex: 1;

  position: relative;
  display: block;
  width: 100%;
  height: 45px;
  border: none;
  background: ${({ background }) => (background ? "#ecebf1" : "none")};
  text-align: center;
  letter-spacing: 2px;

  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export default ExpiryDateInput;
