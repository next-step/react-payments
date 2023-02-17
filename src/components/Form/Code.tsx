import Input from "../Input/Input";
import InputContainer from "../Input/InputContainer";

function Code({ onCodeChange }: CodeProps) {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onCodeChange(Number(e.currentTarget.value));
  };

  return (
    <InputContainer label="보안코드(CVC/CVV)">
      <Input
        size="medium"
        onChange={onChange}
        name="code"
        maxLength={3}
        type="password"
      ></Input>
    </InputContainer>
  );
}

type CodeProps = {
  onCodeChange: Function;
};

export default Code;
