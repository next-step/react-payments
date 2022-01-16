import styled from "@emotion/styled";

import { CARD_NUMBER_LABEL, MAX_LENGTH } from "../constants";

import useCardNumberFieldsRef from "./hooks/useCardNumberFieldsRef";

const isFullField = (filed) => filed.length === MAX_LENGTH;

const AddCardForm = ({ fields, onChange }) => {
  const { firstField, secondField, thirdField, fourthField } = fields;

  const { firstInput, secondInput, thirdInput, fourthInput } =
    useCardNumberFieldsRef({
      fields,
    });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    onChange({ name, value });
  };

  return (
    <form>
      <div>
        <Label htmlFor="card-number">카드 번호</Label>
        <Wrap>
          <Input>
            <input
              aria-label={CARD_NUMBER_LABEL.first}
              ref={firstInput}
              id="card-number"
              type="number"
              name="firstField"
              value={firstField}
              onChange={handleChange}
              autoFocus
            />
          </Input>
          <Input fullField={isFullField(firstField)}>
            <input
              aria-label={CARD_NUMBER_LABEL.second}
              ref={secondInput}
              type="number"
              name="secondField"
              value={secondField}
              onChange={handleChange}
            />
          </Input>
          <Input fullField={isFullField(secondField)}>
            <input
              aria-label={CARD_NUMBER_LABEL.third}
              ref={thirdInput}
              type="password"
              name="thirdField"
              value={thirdField}
              onChange={handleChange}
            />
          </Input>
          <Input fullField={isFullField(thirdField)}>
            <input
              aria-label={CARD_NUMBER_LABEL.fourth}
              ref={fourthInput}
              type="password"
              name="fourthField"
              value={fourthField}
              onChange={handleChange}
            />
          </Input>
        </Wrap>
      </div>
    </form>
  );
};

const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 7px;
`;

const Wrap = styled.ul`
  display: flex;
  background: #ecebf1;
  border-radius: 5px;
`;

const Input = styled.li`
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

  input {
    position: relative;
    display: block;
    width: 100%;
    height: 45px;
    border: none;
    background: none;
    text-align: center;
    letter-spacing: 2px;

    &[type="number"]::-webkit-outer-spin-button,
    &[type="number"]::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`;

export default AddCardForm;
