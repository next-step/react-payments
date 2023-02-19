import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import Input from "components/Input/Item";
import Button from "components/Button/index";

//미션2
const CompletedPage = () => {
  return (
    <Layout>
      <TextWrapper>
        <Text fontSize="lg" weight="bold">
          카드 등록이 완료되었습니다.
        </Text>
      </TextWrapper>
      <CardWrapper>{/* <Card theme="primary" size="big" /> */}</CardWrapper>

      <InputWrapper>
        <Input type="text" placeholder="카드의 별칭을 입력해주세요." theme="underline" active={true} />
      </InputWrapper>

      <ButtonWrapper>
        <Button fontSize="lg" label="Next" />
      </ButtonWrapper>
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  margin-top: 100px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #383838;
  margin: 40px 0px;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 50px 0px;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  text-align: right;
  margin-top: 30px;
`;

export default CompletedPage;
