import styled from "styled-components";
import Card from "components/Card";
import Text from "components/Text";
import InputContainer from "components/Form/Input/Container";
import Input from "components/Form/Input/Item";
import Button from "../Button/index";
import { convertToValidationCardNumber } from '../../utils/index';
import { useRef, useState } from "react";


export const Form = () => {
  const cardNumberInputREf=useRef<HTMLInputElement>(null)


  const handleCardNumberInput=()=>{
      // 카드번호는 숫자만 입력가능 , 카드번호는 4자리마다 - 가 삽입 , 카드번호는 앞 9자리만 숫자로 보여지고 나머지는 숫자 *로
    const ref=cardNumberInputREf.current
    if(ref===null)return 
    const value=ref.value
    ref.value=convertToValidationCardNumber(value)

  }


  return (
    <>
      <CardWrapper>
        <Card fontSize="s" theme="empty" size="small" />
      </CardWrapper>
      <InputLayout>
        <InputTitle fontSize="xs" weight="normal">
          카드 번호
        </InputTitle>
        <InputContainer>
          <Input ref={cardNumberInputREf} type="text" theme="primary" onChange={handleCardNumberInput}></Input>
        </InputContainer>
      </InputLayout>
      <InputLayout>
        <InputTitle fontSize="xs" weight="normal">
          만료일
        </InputTitle>
        <InputContainer width={50}>
          <Input type="text" placeholder="MM" theme="primary"></Input>
          <Input type="text" placeholder="YY" theme="primary"></Input>
        </InputContainer>
      </InputLayout>
      <InputLayout>
        <InputTitle fontSize="xs" weight="normal">
          카드 소유자 이름(선택)
        </InputTitle>
        <Input type="text" theme="primary" placeholder="카드에 표시된 이름과 동일하게 입력하세요." />
      </InputLayout>
      <InputLayout>
        <InputTitle fontSize="xs" weight="normal">
          보안코드 (CVC/CVV)
        </InputTitle>
        <InputContainer width={25}>
          <Input theme="primary" type="text" />
        </InputContainer>
      </InputLayout>
      <InputLayout>
        <InputTitle fontSize="xs" weight="normal">
          카드 비밀번호
        </InputTitle>
        <InputContainer width={70}>
          <Input theme="primary" type="text" />
          <Input theme="primary" type="text" />
          <Input theme="primary" type="text" />
          <Input theme="primary" type="text" />
        </InputContainer>
      </InputLayout>
      <ButtonBox>
        <Button size="s">Next</Button>
      </ButtonBox>
    </>
  );
};

const InputTitle = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;

const InputLayout = styled.div`
  margin: 16px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
const ButtonBox = styled.div`
  width: 100%;
  text-align: right;
`;

export default Form;
