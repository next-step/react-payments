import Text from "components/Text";
import { useRef, useState } from "react";
import styled from "styled-components";
import { checkCardNumber } from "utils";
import Input from "../../Input/Item";
import InputContainer from "components/Input/Container";

const CardNumberInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    // 카드번호는 숫자만 입력가능 , 카드번호는 4자리마다 - 가 삽입 , 카드번호는 앞 8자리만 숫자로 보여지고 나머지는 숫자 *로
    const ref = inputRef.current;
    if (ref === null) return;
    const value = ref.value;
    ref.value = checkCardNumber(value);
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        카드 번호
      </Title>
      <InputContainer>
        <Input ref={inputRef} type="text" theme="primary" onChange={handleInput}></Input>
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
