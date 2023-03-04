import styled from "styled-components";
import Card from "components/common/Card/Card";
import Text from "components/common/Text/Text";
import Input from "components/common/Input/Input";
import Button from "components/common/Button/Button";
import { useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { changeAliasLength } from "../../utils/InputChange";
import { PaymentsContext } from "context/Payments";

const AliasPage = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputLength, setInputLength] = useState(0);
  const paymentsCtx = useContext(PaymentsContext);
  const cardList = paymentsCtx.cardList;
  const currentCard = cardList.find((card) => card.id === localStorage.getItem("id"));

  if (!currentCard) {
    return <div>존재하지 않는 카드 입니다. </div>;
  }

  const navigate = useNavigate();

  const submit = () => {
    const currentInputRef = inputRef.current;
    if (currentInputRef === null) return;
    const aliasValue = currentInputRef.value;
    let aliasName = !aliasValue.length ? currentCard.company : aliasValue;
    const aliasCard = {
      ...currentCard,
      alias: aliasName,
    };
    paymentsCtx.updateAlias(aliasCard);
    navigate("/");
  };

  const handleInput = () => {
    const currentInputRef = inputRef.current;
    if (currentInputRef === null) return;
    currentInputRef.value = changeAliasLength(currentInputRef.value);
    const length = currentInputRef.value.length;
    setInputLength(length);
  };
  return (
    <Layout>
      <TextWrapper>
        {!currentCard.alias.length ? (
          <Text fontSize="lg" weight="bold" label="카드 등록이 완료되었습니다."></Text>
        ) : (
          <Text fontSize="lg" weight="bold" label="카드 별칭 수정"></Text>
        )}
      </TextWrapper>
      <CardWrapper>
        <Card
          type="primary"
          size="big"
          color={currentCard.color}
          company={currentCard.company}
          number={currentCard.cardNumbers}
          expireMonth={currentCard.expireDate.month}
          expireYear={currentCard.expireDate.year}
          ownerName={currentCard.ownerName}
        />
      </CardWrapper>
      <Box>
        <Input
          type="text"
          placeholder="카드의 별칭 (선택) "
          theme="underline"
          active={true}
          ref={inputRef}
          onChange={handleInput}
        />
        <Text fontSize="s" weight="normal" label={`${inputLength}/10`} />
      </Box>

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
const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 20px;
  margin-top: 30px;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  width: 90%;
  text-align: right;
  margin: 30px;
`;

export default AliasPage;
