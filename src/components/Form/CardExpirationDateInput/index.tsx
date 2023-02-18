import InputContainer from "components/Input/Container";
import Input from "components/Input/Item";
import Text from "components/Text";
import styled from "styled-components";

const CardExpirationDateInput = () => {
  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        만료일
      </Title>
      <InputContainer width={50}>
        <Input type="text" placeholder="MM / YY" theme="primary"></Input>
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

export default CardExpirationDateInput;
