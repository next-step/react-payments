import useCardNumberFieldsRef from "./hooks/useCardNumberFieldsRef";

import { CARD_NUMBER_LABEL } from "../constants";

import isFullField from "../utils/isFullField";
import isNotNumber from "../utils/isNotNumber";

import InputGroup from "../InputGroup";
import Input from "../Input";

import * as InputStyle from "../../style/input";

const CardNumberInput = ({ fields, onChange }) => {
  const MAX_LENGTH = 4;

  const { firstField, secondField, thirdField, fourthField } = fields;

  const { firstInput, secondInput, thirdInput, fourthInput } =
    useCardNumberFieldsRef({
      fields,
    });

  const handleChange = ({ name, value }) => {
    if (isNotNumber(value)) {
      return;
    }

    onChange({
      key: "cardNumbers",
      name,
      value,
    });
  };

  const inputProperties = [
    {
      id: "card-number",
      ariaLabel: CARD_NUMBER_LABEL.first,
      ref: firstInput,
      name: "firstField",
      value: firstField,
      maxLength: MAX_LENGTH,
    },
    {
      ariaLabel: CARD_NUMBER_LABEL.second,
      ref: secondInput,
      name: "secondField",
      value: secondField,
      maxLength: MAX_LENGTH,
    },
    {
      ariaLabel: CARD_NUMBER_LABEL.third,
      ref: thirdInput,
      type: "password",
      name: "thirdField",
      value: thirdField,
      maxLength: MAX_LENGTH,
    },
    {
      ariaLabel: CARD_NUMBER_LABEL.fourth,
      ref: fourthInput,
      type: "password",
      name: "fourthField",
      value: fourthField,
      maxLength: MAX_LENGTH,
    },
  ];

  return (
    <InputStyle.Container>
      <InputStyle.Label htmlFor="card-number">
        카드 번호
      </InputStyle.Label>

      <InputStyle.Group>
        {inputProperties.map((property, index) => {
          const { name, maxLength, ref } = property;

          const prevInput = inputProperties[index - 1];

          const isVisible =
            index !== 0 &&
            isFullField({
              field: prevInput.value,
              maxLength,
            });

          return (
            <InputGroup key={name} separator={isVisible && "-"}>
              <Input
                {...property}
                ref={ref}
                onChange={handleChange}
              />
            </InputGroup>
          );
        })}
      </InputStyle.Group>
    </InputStyle.Container>
  );
};

export default CardNumberInput;
