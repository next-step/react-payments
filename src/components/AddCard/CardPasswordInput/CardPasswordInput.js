import styled from "@emotion/styled";

import usePasswordDateFieldsRef from "./hooks/usePasswordDateFieldsRef";

import Input from "../Input";

import * as InputStyle from "../../style/input";

const CardPasswordInput = ({ fields, onChange }) => {
  const { firstField, secondField } = fields;

  const { firstInput, secondInput } = usePasswordDateFieldsRef({
    fields,
  });

  const handleChange = ({ name, value }) => {
    onChange({
      key: "cardPassword",
      name,
      value,
    });
  };

  const firstInputAttribute = {
    id: "first-password",
    ariaLabel: "비밀번호 첫번째 자리",
    ref: firstInput,
    type: "password",
    name: "firstField",
    value: firstField,
    maxLength: 1,
  };

  const secondInputAttribute = {
    ariaLabel: "비밀번호 두번째 자리",
    ref: secondInput,
    type: "password",
    name: "secondField",
    value: secondField,
    maxLength: 1,
  };

  return (
    <InputStyle.Container>
      <InputStyle.Label htmlFor="first-password">
        카드 비밀번호
      </InputStyle.Label>
      <InputStyle.Group pin>
        <Input
          field={firstInputAttribute}
          onChange={handleChange}
          background
        />
        <Input
          field={secondInputAttribute}
          onChange={handleChange}
          background
        />
        <FakeInput>●</FakeInput>
        <FakeInput>●</FakeInput>
      </InputStyle.Group>
    </InputStyle.Container>
  );
};

const FakeInput = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 7px;
  padding: 12px 0;
  width: 43px;
  border: none;
  font-size: 12px;
  text-align: center;
  letter-spacing: 2px;
`;

export default CardPasswordInput;
