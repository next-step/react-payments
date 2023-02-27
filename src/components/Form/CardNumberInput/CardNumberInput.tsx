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
