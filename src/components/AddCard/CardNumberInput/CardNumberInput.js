import styled from "@emotion/styled";

import useCardNumberFieldsRef from "./hooks/useCardNumberFieldsRef";

import { CARD_NUMBER_LABEL } from "../constants";

import InputWithLabel from "../InputBox/InputWithLabel";

import isFullField from "../utils/isFullField";

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
      <Item>
        <Input
          aria-label={CARD_NUMBER_LABEL.first}
          ref={firstInput}
          id="card-number"
          type="number"
          name="firstField"
          value={firstField}
          onChange={handleChange}
          autoFocus
          background="#ecebf1"
        />
      </Item>
      <Item fullField={isFullField(firstField)}>
        <Input
          aria-label={CARD_NUMBER_LABEL.second}
          ref={secondInput}
          type="number"
          name="secondField"
          value={secondField}
          onChange={handleChange}
        />
      </Item>
      <Item fullField={isFullField(secondField)}>
        <Input
          aria-label={CARD_NUMBER_LABEL.third}
          ref={thirdInput}
          type="password"
          name="thirdField"
          value={thirdField}
          onChange={handleChange}
        />
      </Item>
      <Item fullField={isFullField(secondField)}>
        <Input
          aria-label={CARD_NUMBER_LABEL.fourth}
          ref={fourthInput}
          type="password"
          name="fourthField"
          value={fourthField}
          onChange={handleChange}
          background
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

export default CardNumberInput;
