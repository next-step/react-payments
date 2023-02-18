import Text from "components/Text";
import styled from "styled-components";
import Card from "components/Card";

const RegisterPage = () => {
  // add 버튼을 누르면 카드 추가 페이지를 보여준다.
  return (
    <Layout>
      <Container>
        <Text fontSize="lg" weight="bold">
          보유 카드
        </Text>
        <CardContainer>
          {/* <Card fontSize="s" theme="primary" size="small" />
          <Card fontSize="s" theme="primary" size="small" /> */}
          <Card theme="add" size="small" />
        </CardContainer>
      </Container>
    </Layout>
  );
};
export default RegisterPage;
const Layout = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  color: #383838;
  padding: 10px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  margin: 20px;
  & > div {
    margin: 20px 0px;
  }
`;
