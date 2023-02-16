import Form from "components/Form";
import Text from "components/Text";
import styled from "styled-components";

const AddPage = () => {
  return (
    <Layout>
      <TextBox>
        <Text fontSize="page-title" weight="bold">
          카드추가
        </Text>
      </TextBox>
      <Form />
    </Layout>
  );
};

const Layout = styled.div`
  height: 100%;
  padding: 16px 24px;
`;
const TextBox = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  padding: 10px;
  margin-bottom: 20px;
`;

export default AddPage;
