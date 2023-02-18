import Text from "components/Text";
import { forwardRef, useRef, useState } from "react";
import styled from "styled-components";
import { checkCardNumber } from "utils";
import Input from "../../Input/Item";
import InputContainer from "components/Input/Container";

const CardNumberInput = ({ setCardNumber }) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const currentRef = ref.current;
    if (currentRef === null) return;
    const cardNumber = checkCardNumber(currentRef.value);
    currentRef.value = cardNumber;
    setCardNumber(cardNumber);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        카드 번호
      </Title>
      <InputContainer>
        <Input ref={ref} type="text" theme="primary" onChange={handleInput}></Input>
      </InputContainer>
    </Layout>
  );
};

const Layout = styled.div`
  margin: 16px 0;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;

export default CardNumberInput;
