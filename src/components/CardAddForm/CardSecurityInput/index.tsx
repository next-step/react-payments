import Text from "components/Text";
import styled from "styled-components";
import InputContainer from "../../Input/Container";
import Input from "../../Input/Item";
import { useRef } from "react";
import { checkCardSecurityInput } from "utils";

const CardSecurityInput = ({ fontColor }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const value = ref.value;
    ref.value = checkCardSecurityInput(value);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        보안코드 (CVC/CVV)
      </Title>
      <InputContainer width={25}>
        <Input theme="primary" type="text" ref={inputRef} onChange={handleInput} fontColor={fontColor} active={true} />
      </InputContainer>
    </Layout>
  );
};

export default CardSecurityInput;
const Layout = styled.div`
  margin: 16px 0;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
