import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function ExpiredDate() {
  return (
    <InputContainer label="만료일">
      <InputBox medium>
        <Input placeholder="MM" maxLength={2}></Input>
        <Input placeholder="YY" maxLength={2}></Input>
      </InputBox>
    </InputContainer>
  );
}

export default ExpiredDate;
