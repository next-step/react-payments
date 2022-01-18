import { EXPIRY_DATE_LABEL } from "../constants";

import useExpiryDateFieldsRef from "./hooks/useExpiryDateFieldsRef";

import InputGroup from "../InputGroup";
import Input from "../Input";

import * as InputStyle from "../../style/input";

const ExpiryDateInput = ({ fields, onChange }) => {
  const { monthField, yearField } = fields;

  const { monthInput, yearInput } = useExpiryDateFieldsRef({
    fields,
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({ maxLength: 2, key: "expiryDate", name, value });
  };

  const monthInputAttribute = {
    id: "expiry-date",
    ariaLabel: EXPIRY_DATE_LABEL.month,
    ref: monthInput,
    type: "number",
    name: "monthField",
    placeholder: "MM",
    value: monthField,
    maxLength: 2,
  };

  const yearInputAttribute = {
    ariaLabel: EXPIRY_DATE_LABEL.year,
    ref: yearInput,
    type: "number",
    name: "yearField",
    placeholder: "YY",
    value: yearField,
    maxLength: 2,
  };

  return (
    <InputStyle.Container>
      <InputStyle.Label htmlFor="expiry-date">만료일</InputStyle.Label>
      <InputStyle.Group>
        <InputGroup>
          <Input field={monthInputAttribute} onChange={handleChange} />
        </InputGroup>
        <InputGroup>
          <Input field={yearInputAttribute} onChange={handleChange} />
        </InputGroup>
      </InputStyle.Group>
    </InputStyle.Container>
  );
};

export default ExpiryDateInput;
