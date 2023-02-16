import Dot from "components/Dot";
import Form from "components/Form";
import Modal from "components/Modal";
import Text from "components/Text";
import styled from "styled-components";

const AddPage = () => {
  return (
    <>
      <Modal>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
        <DotContainer>
          <Dot />
          <Dot />
          <Dot />
          <Dot />
        </DotContainer>
      </Modal>
      <Layout>
        <TextWrapper>
          <Text fontSize="page-title" weight="bold">
            카드추가
          </Text>
        </TextWrapper>
        <Form />
      </Layout>
    </>
  );
};

const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  padding: 10px;
  margin-bottom: 20px;
`;
const DotContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AddPage;
