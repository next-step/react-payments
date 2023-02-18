import Dot from "components/CardDotInfo";
import Form from "components/Form";
import Modal from "components/Modal";
import Text from "components/Text";
import styled from "styled-components";
import IconButton from "../../components/IconButton/index";

const AddPage = () => {
  const handleLeftButton = () => {
    console.log("left");
  };

  return (
    <>
      <Layout>
        <Header>
          <IconButton onClick={handleLeftButton} name="arrowLeft" size="2xl" color="#575757" />
          <Text fontSize="lg" weight="bold">
            카드추가
          </Text>
        </Header>
        <Form />
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

export default AddPage;
