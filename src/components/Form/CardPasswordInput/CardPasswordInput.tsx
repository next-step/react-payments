import Text from "components/Text/Text";
import styled from "styled-components";
import Input from "../../Input/Input";
import InputContainer from "components/Input/Container/Container";
import { useRef } from "react";
import { changePassword } from "utils";
import { ColorType, CardFormType } from "types";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setPassword: React.Dispatch<React.SetStateAction<CardFormType>>;
};

const CardPasswordInput = ({ fontColor, setPassword }: CardPasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    if (inputRef.current === null || inputRef2.current === null) return;
    const passwordOne = inputRef.current.value;
    const passwordTwo = inputRef2.current.value;
    inputRef.current.value = changePassword(passwordOne);
    inputRef2.current.value = changePassword(passwordTwo);

    setPassword((prev) => ({
      ...prev,
      password: {
        one: passwordOne,
        two: passwordTwo,
      },
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal" label="카드 비밀번호" />
      <InputContainer width={70}>
        <Input theme="primary" type="text" active={true} ref={inputRef} onChange={handleInput} fontColor={fontColor} />
        <Input theme="primary" type="text" active={true} ref={inputRef2} onChange={handleInput} fontColor={fontColor} />
        <Input theme="primary" type="text" active={false} />
        <Input theme="primary" type="text" active={false} />
      </InputContainer>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 16px 0;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
export default CardPasswordInput;
