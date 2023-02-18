import Text from "components/Text";
import styled from "styled-components";
import InputContainer from "../../Input/Container";
import Input from "../../Input/Item";
const CardSecurityInput = () => {
  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        보안코드 (CVC/CVV)
      </Title>
      <InputContainer width={25}>
        <Input theme="primary" type="text" />
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
