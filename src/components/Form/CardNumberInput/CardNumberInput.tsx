import Text from "components/Text/Text";
import { useRef } from "react";
import styled from "styled-components";
import { checkCardNumber } from "utils";
import Input from "../../Input/Input";
import InputContainer from "components/Input/Container/Container";
import { ColorType, CardFormType } from "types";
type CardNumberInputProps = {
  setCardNumber: React.Dispatch<React.SetStateAction<CardFormType>>;
  fontColor: ColorType;
};

const CardNumberInput = ({ setCardNumber, fontColor }: CardNumberInputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const currentRef = ref.current;
    if (currentRef === null) return;
    const cardNumbers = checkCardNumber(currentRef.value);
    currentRef.value = cardNumbers;
    setCardNumber((prev) => ({
      ...prev,
      cardNumbers,
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="카드 번호" />
      <InputContainer>
        <Input ref={ref} type="text" theme="primary" onChange={handleInput} fontColor={fontColor} active={true}></Input>
      </InputContainer>
      <Wrapper>
        <Text fontSize="xs" weight="bold" label="카드 번호는 12자리여야 합니다." fontColor="red" />
      </Wrapper>
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 20px;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
const Wrapper = styled.div`
  margin-top: 3px;
  padding-left: 3px;
`;

export default CardNumberInput;
