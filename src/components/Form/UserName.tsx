import React, { ForwardedRef, useState } from "react";
import Input from "../Input/Input";
import InputBox from "../Input/InputBox";
import InputContainer from "../Input/InputContainer";

const MAX_LENGTH = 30;

function UserName(
  { onUserNameChange }: CardNumberProps,
  ref: ForwardedRef<HTMLInputElement | null>
) {
  const [username, setUsername] = useState("");

  const rightLabel = `${username.length} / ${MAX_LENGTH}`;

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.currentTarget.value);
    onUserNameChange(event.currentTarget.value);
  };

  return (
    <InputContainer label="카드 소유자 이름(선택)" rightLabel={rightLabel}>
      <InputBox>
        <Input
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          onChange={onChange}
          name="username"
          maxLength={MAX_LENGTH}
          ref={ref}
        ></Input>
      </InputBox>
    </InputContainer>
  );
}

type CardNumberProps = {
  onUserNameChange: Function;
};

const forwardedUserName = React.forwardRef(UserName);
export default forwardedUserName;
