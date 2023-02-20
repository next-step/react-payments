import AddCardForm from "components/AddCardForm";
import Text from "components/Text";
import styled from "styled-components";
import IconButton from "../../components/IconButton/index";
import { useNavigate } from "react-router-dom";

const AddCardPage = () => {
  const navigate = useNavigate();
  const handleBackButton = () => {
    navigate("/");
  };

  return (
    <>
      <Layout>
        <Header>
          <IconButton onClick={handleBackButton} name="arrowLeft" size="2xl" color="#575757" />
          <Text fontSize="lg" weight="bold" label="카드추가" />
        </Header>
        <AddCardForm />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin-top: 10px;
  margin-bottom: 20px;
  gap: 20px;
`;

export default AddCardPage;
