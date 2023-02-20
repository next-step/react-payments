import Text from "components/Text";
import styled from "styled-components";
import Input from "../../Input/Item";
import InputContainer from "components/Input/Container";
import { useRef } from "react";
import { checkPassword } from "utils";
import { ColorType } from "types";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
};

const CardPasswordInput = ({ fontColor, setPassword }: CardPasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const handleInputOne = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const password = ref.value;
    ref.value = checkPassword(password);
    setPassword(password);
  };
  const handleInputTwo = () => {
    const ref = inputRef2.current;
    if (ref === null) return;
    const password = ref.value;
    ref.value = checkPassword(password);
    setPassword(password);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        카드 비밀번호
      </Title>
      <InputContainer width={70}>
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={inputRef}
          onChange={handleInputOne}
          fontColor={fontColor}
        />
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={inputRef2}
          onChange={handleInputTwo}
          fontColor={fontColor}
        />
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
