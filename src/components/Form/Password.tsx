import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";

function Password() {
  return (
    <InputContainer label="카드 비밀번호">
      <Input size="small" type="password"></Input>
      <Input size="small" type="password"></Input>
      <Input size="small" type="password"></Input>
      <Input size="small" type="password"></Input>
    </InputContainer>
  );
}

export default Password;
