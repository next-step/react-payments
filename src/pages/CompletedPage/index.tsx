import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import Input from "components/Input";
import Button from "components/Button/index";
import { useContext, useRef } from "react";
import { CardContext } from "context/Card";
import { useNavigate } from "react-router-dom";

//미션2
const CompletedPage = () => {
  const ref = useRef<HTMLInputElement>(null);
  const cardCtx = useContext(CardContext);
  const temporaryCard = cardCtx.state.store;
  const navigate = useNavigate();

  const submit = () => {
    const currentInputRef = ref.current;
    if (currentInputRef === null) return;
    const alias = currentInputRef.value;
    const newCard = {
      ...cardCtx.state.store,
      alias,
    };
    cardCtx.addCard(newCard);

    navigate("/");
  };

  return (
    <Layout>
      <TextWrapper>
        <Text fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Text>
      </TextWrapper>
      <CardWrapper>
        <Card
          type="primary"
          size="big"
          color={temporaryCard.color}
          company={temporaryCard.company}
          number={temporaryCard.cardNumbers}
          expireMonth={temporaryCard.expireDate.month}
          expireYear={temporaryCard.expireDate.year}
          ownerName={temporaryCard.ownerName}
        />
      </CardWrapper>

      <InputWrapper>
        <Input type="text" placeholder="카드의 별칭을 입력해주세요." theme="underline" active={true} ref={ref} />
      </InputWrapper>

      <ButtonWrapper>
        <Button fontSize="lg" label="Next" onClick={submit} />
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
