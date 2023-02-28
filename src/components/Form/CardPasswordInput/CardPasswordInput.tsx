import Text from "components/Text/Text";
import styled from "styled-components";
import Input from "../../Input/Input";
import InputContainer from "components/Input/Container/Container";
import { useRef } from "react";
import { changePassword } from "utils/InputChange";
import { ColorType, CardFormType } from "types";
import { isValidPasswordNumber } from "../../../utils/InputValidation";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setPassword: React.Dispatch<React.SetStateAction<CardFormType>>;
};

const CardPasswordInput = ({ fontColor, setPassword }: CardPasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);
  const isValidOne = isValidPasswordNumber(inputRef.current?.value);
  const isValidTwo = isValidPasswordNumber(inputRef2.current?.value);
  const isValid = isValidOne && isValidTwo;

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
        isValid: isValidPasswordNumber(passwordOne) && isValidPasswordNumber(passwordTwo),
      },
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="카드 비밀번호" />
      <Container width={70}>
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={inputRef}
          onChange={handleInput}
          fontColor={fontColor}
          error={!isValidOne}
        />
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={inputRef2}
          onChange={handleInput}
          fontColor={fontColor}
          error={!isValidTwo}
        />
        <Input theme="primary" type="text" active={false} />
        <Input theme="primary" type="text" active={false} />
      </Container>
      <Wrapper>
        {!isValid && <Text fontSize="xs" weight="bold" label="숫자 1자리씩 입력해주세요" fontColor="red" />}
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 20px;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
const Container = styled(InputContainer)`
  display: flex;
  gap: 5px;
`;
const Wrapper = styled.div`
  margin-top: 3px;
  padding-left: 3px;
`;

export default CardPasswordInput;
