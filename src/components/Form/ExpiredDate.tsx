import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function ExpiredDate() {
  return (
    <InputContainer label="카드 번호">
      <InputBox medium>
        <Input placeholder="MM"></Input>
        <Input placeholder="YY"></Input>
      </InputBox>
    </InputContainer>
  );
}

export default ExpiredDate;
