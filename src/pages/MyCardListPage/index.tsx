import Text from "components/Text";
import styled from "styled-components";
import Card from "components/Card";
import { useNavigate } from "react-router-dom";

const MyCardListPage = () => {
  // add 버튼을 누르면 카드 추가 페이지를 보여준다.
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate("/add");
  };

  return (
    <Layout>
      <Text fontSize="lg" weight="bold" label="보유카드" />
      <Card type="add" size="small" onClick={handleAddCard} />
    </Layout>
  );
};
export default MyCardListPage;
const Layout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
