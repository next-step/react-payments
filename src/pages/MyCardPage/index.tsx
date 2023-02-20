import Text from "components/Text";
import styled from "styled-components";
import Card from "components/Card";
import AddCard from "../../components/Card/AddCard/index";
import { useNavigate } from "react-router-dom";

const MyCardPage = () => {
  // add 버튼을 누르면 카드 추가 페이지를 보여준다.
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate("/add");
  };

  return (
    <Layout>
      <Container>
        <Text fontSize="lg" weight="bold" label="보유카드" />
        <AddCard onClick={handleAddCard} />
      </Container>
    </Layout>
  );
};
export default MyCardPage;
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
