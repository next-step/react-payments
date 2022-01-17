import { EXPIRY_DATE_LABEL } from "../constants";

import InputWithLabel from "../InputWithLabel";

import isFullField from "../utils/isFullField";

import useExpiryDateFieldsRef from "./hooks/useExpiryDateFieldsRef";

import Input from "../Input";

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
      <Input
        field={{
          id: "expiry-date",
          ariaLabel: EXPIRY_DATE_LABEL.month,
          ref: monthInput,
          type: "number",
          name: "monthField",
          placeholder: "MM",
          value: monthField,
          maxLength: 2,
        }}
        onChange={handleChange}
      />
      <Input
        field={{
          ariaLabel: EXPIRY_DATE_LABEL.year,
          ref: yearInput,
          type: "number",
          name: "yearField",
          placeholder: "YY",
          value: yearField,
          maxLength: 2,
        }}
        onChange={handleChange}
        isFullField={isFullField({ field: monthField, maxLength: 2 })}
        separator="/"
      />
    </InputWithLabel>
  );
};

export default ExpiryDateInput;
