import Text from "components/Text";
import styled from "styled-components";
import Input from "../../Input/Item";
import InputContainer from "components/Input/Container";
import { useRef } from "react";
import { checkPassword } from "utils";

const CardPasswordInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const inputRef2 = useRef<HTMLInputElement>(null);

  const handleInputOne = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const value = ref.value;
    ref.value = checkPassword(value);
  };
  const handleInputTwo = () => {
    const ref = inputRef2.current;
    if (ref === null) return;
    const value = ref.value;
    ref.value = checkPassword(value);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        카드 비밀번호
      </Title>
      <InputContainer width={70}>
        <Input theme="primary" type="text" ref={inputRef} onChange={handleInputOne} />
        <Input theme="primary" type="text" ref={inputRef2} onChange={handleInputTwo} />
        <Input theme="primary" type="text" active={true} />
        <Input theme="primary" type="text" active={true} />
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
