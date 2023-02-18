import Dot from "components/CardList";
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
      {/* <Modal>
        <DotContainer>
          <Dot color="red" text="하나카드" />
          <Dot color="pink" text="국민카드" />
          <Dot color="cyon" text="신한카드" />
          <Dot color="purple" text="클린카드" />
        </DotContainer>
        <DotContainer>
          <Dot color="blue" text="토스카드" />
          <Dot color="green" text="네이버카드" />
          <Dot color="yellow" text="카카오카드" />
          <Dot color="orange" text="오렌지카드" />
        </DotContainer>
      </Modal> */}
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
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AddPage;
