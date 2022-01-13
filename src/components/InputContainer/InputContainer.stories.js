import { Input } from "../BasicInput/BasicInput.stories";

import InputContainer from "./InputContainer";

export default {
  title: "Component/LabelAndInput",
  component: InputContainer,
};

export const Basic = () => (
  <>
    <InputContainer id="card-number1" label="카드소유자이름">
      <Input id="card-number1" {...Input.args} />
    </InputContainer>

    <InputContainer id="card-number2" label="보안 코드">
      <Input id="card-number2" width="84px" {...Input.args} />
    </InputContainer>

    <InputContainer id="card-number2" label="비밀번호" width="200px">
      <Input id="card-number2" type="password" />
      <Input type="password" />
      <Input type="password" />
      <Input type="password" />
    </InputContainer>
  </>
);
