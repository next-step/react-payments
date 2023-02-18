import Text from "components/Text";
import { useRef, useState } from "react";
import styled from "styled-components";
import { convertToValidationCardNumber } from "utils";
import Input from "../../Input/Item";
import InputContainer from "components/Input/Container";

const CardNumberInput = () => {
  const cardNumberInputREf = useRef<HTMLInputElement>(null);

  const handleCardNumberInput = () => {
    // 카드번호는 숫자만 입력가능 , 카드번호는 4자리마다 - 가 삽입 , 카드번호는 앞 8자리만 숫자로 보여지고 나머지는 숫자 *로
    const ref = cardNumberInputREf.current;
    if (ref === null) return;
    const value = ref.value;
    ref.value = convertToValidationCardNumber(value);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        카드 번호
      </Title>
      <InputContainer>
        <Input ref={cardNumberInputREf} type="text" theme="primary" onChange={handleCardNumberInput}></Input>
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
