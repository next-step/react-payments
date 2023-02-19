import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

function UserName({ onUserNameChange }: CardNumberProps) {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUserNameChange(event.currentTarget.value);
  };

  return (
    <InputContainer label="카드 소유자 이름(선택)">
      <InputBox>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={onChange}
          name="username"
          maxLength={30}
        ></Input>
      </InputBox>
    </InputContainer>
  );
}

type CardNumberProps = {
  onUserNameChange: Function;
};

export default UserName;
