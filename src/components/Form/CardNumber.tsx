import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function CardNumber() {
  return (
    <InputContainer label="카드 번호">
      <InputBox>
        <Input></Input>
        <Input></Input>
        <Input type="password"></Input>
        <Input type="password"></Input>
      </InputBox>
    </InputContainer>
  );
}

export default CardNumber;
