import useCardNumberFieldsRef from "./hooks/useCardNumberFieldsRef";

import { CARD_NUMBER_LABEL } from "../constants";

import isFullField from "../utils/isFullField";

import InputGroup from "../InputGroup";
import Input from "../Input";

import * as InputStyle from "../../style/input";

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

  const firstInputData = {
    id: "card-number",
    ariaLabel: CARD_NUMBER_LABEL.first,
    ref: firstInput,
    type: "number",
    name: "firstField",
    value: firstField,
  };

  const secondInputData = {
    ariaLabel: CARD_NUMBER_LABEL.second,
    ref: secondInput,
    type: "number",
    name: "secondField",
    value: secondField,
  };

  const thirdInputData = {
    ariaLabel: CARD_NUMBER_LABEL.third,
    ref: thirdInput,
    type: "password",
    name: "thirdField",
    value: thirdField,
  };

  const fourthInputData = {
    ariaLabel: CARD_NUMBER_LABEL.fourth,
    ref: fourthInput,
    type: "password",
    name: "fourthField",
    value: fourthField,
  };

  return (
    <InputStyle.Container>
      <InputStyle.Label htmlFor="card-number">카드 번호</InputStyle.Label>
      <InputStyle.Group>
        <InputGroup>
          <Input field={firstInputData} onChange={handleChange} />
        </InputGroup>
        <InputGroup
          separator={isFullField({ field: firstField, maxLength: 4 }) && "-"}
        >
          <Input field={secondInputData} onChange={handleChange} />
        </InputGroup>
        <InputGroup
          separator={isFullField({ field: secondField, maxLength: 4 }) && "-"}
        >
          <Input field={thirdInputData} onChange={handleChange} />
        </InputGroup>
        <InputGroup
          separator={isFullField({ field: thirdField, maxLength: 4 }) && "-"}
        >
          <Input field={fourthInputData} onChange={handleChange} />
        </InputGroup>
      </InputStyle.Group>
    </InputStyle.Container>
  );
};

export default CardNumberInput;
