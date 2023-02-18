import Text from "components/Text";
import styled from "styled-components";
import Input from "../../Input/Item";
import InputContainer from "components/Input/Container";
const CardPasswordInput = () => {
  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        카드 비밀번호
      </Title>
      <InputContainer width={70}>
        <Input theme="primary" type="text" />
        <Input theme="primary" type="text" />
        <Input theme="primary" type="text" />
        <Input theme="primary" type="text" />
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
