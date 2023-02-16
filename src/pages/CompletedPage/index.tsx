import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import Input from "components/Input/Item";
import Button from "components/Button/index";

const CompletedPage = () => {
  return (
    <Layout>
      <TextBox>
        <Text fontSize="page-title" weight="bold">
          카드 등록이 완료되었습니다.
        </Text>
      </TextBox>
      <CardBox>
        <Card fontSize="m" theme="primary" size="big" />
      </CardBox>

      <InputBox>
        <Input type="text" placeholder="카드의 별칭을 입력해주세요." theme="underline" />
      </InputBox>

      <ButtonBox>
        <Button size="lg">Next</Button>
      </ButtonBox>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardBox = styled.div`
  margin-top: 100px;
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin: 40px 0px;
`;
const InputBox = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0px;
`;

const ButtonBox = styled.div`
  width: 90%;
  text-align: right;
  margin-top: 30px;
`;

export default CompletedPage;
