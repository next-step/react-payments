import Text from "components/common/Text/Text";
import styled from "styled-components";
import { changeCardNumber } from "utils/InputChange";
import Input from "../../../common/Input/Input";
import { ColorType, CardFormType, CardFormInputsType } from "types";
import { isValidCardNumber } from "utils/InputValidation";
type CardNumberInputProps = {
  setCardNumberText: React.Dispatch<React.SetStateAction<CardFormType>>;
  setCardNumbersInput: (cardNumbers: string) => void;
  isValid: boolean;
  fontColor: ColorType;
  refs: CardFormInputsType;
};

const CardNumberInput = ({
  isValid,
  setCardNumberText,
  fontColor,
  refs,
  setCardNumbersInput,
}: CardNumberInputProps) => {
  const handleInput = () => {
    if (!refs.cardNumbers.ref) return;
    const cardNumbers = changeCardNumber(refs.cardNumbers.ref.value);
    setCardNumbersInput(cardNumbers);
    setCardNumberText((prev) => ({
      ...prev,
      cardNumbers: {
        text: cardNumbers,
        isValid: isValidCardNumber(cardNumbers),
      },
    }));

    return isValidCardNumber(cardNumbers) && refs.expireDate.month.ref?.focus();
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="카드 번호" />
      <Wrapper>
        <Input
          ref={(el) => (refs.cardNumbers.ref = el)}
          type="text"
          theme="primary"
          onChange={handleInput}
          fontColor={fontColor}
          active={true}
          error={!isValid}
        ></Input>
      </Wrapper>
      <Wrapper>
        {!isValid && <Text fontSize="xs" weight="bold" label="카드 번호는 12자리여야 합니다." fontColor="red" />}
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
