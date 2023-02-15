import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";

function Code() {
  return (
    <InputContainer label="보안코드(CVC/CVV)">
      <Input size="medium"></Input>
    </InputContainer>
  );
}

export default Code;
