import useCardNumberFieldsRef from "./hooks/useCardNumberFieldsRef";

import { CARD_NUMBER_LABEL } from "../constants";

import InputWithLabel from "../InputBox/InputWithLabel";

import isFullField from "../utils/isFullField";
import Input from "../Input";

const CardNumberInput = ({ fields, onChange }) => {
  const { firstField, secondField, thirdField, fourthField } = fields;

  const { firstInput, secondInput, thirdInput, fourthInput } =
    useCardNumberFieldsRef({
      fields,
    });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({ maxLength: 4, key: "cardNumbers", name, value });
  };

  return (
    <InputWithLabel id="card-number" label="카드 번호">
      <Input
        field={{
          ariaLabel: CARD_NUMBER_LABEL.first,
          ref: firstInput,
          id: "card-number",
          type: "number",
          name: "firstField",
          value: firstField,
        }}
        onChange={handleChange}
      />

      <Input
        field={{
          ariaLabel: CARD_NUMBER_LABEL.second,
          ref: secondInput,
          type: "number",
          name: "secondField",
          value: secondField,
        }}
        onChange={handleChange}
        isFullField={isFullField({ field: firstField, maxLength: 4 })}
      />

      <Input
        field={{
          ariaLabel: CARD_NUMBER_LABEL.third,
          ref: thirdInput,
          type: "password",
          name: "thirdField",
          value: thirdField,
        }}
        onChange={handleChange}
        isFullField={isFullField({ field: secondField, maxLength: 4 })}
      />

      <Input
        field={{
          ariaLabel: CARD_NUMBER_LABEL.fourth,
          ref: fourthInput,
          type: "password",
          name: "fourthField",
          value: fourthField,
        }}
        onChange={handleChange}
        isFullField={isFullField({ field: thirdField, maxLength: 4 })}
      />
    </InputWithLabel>
  );
};

export default CardNumberInput;
