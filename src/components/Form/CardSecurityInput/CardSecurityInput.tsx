import Text from "components/Text/Text";
import styled from "styled-components";
import InputContainer from "../../Input/Container/Container";
import Input from "../../Input/Input";
import { useRef } from "react";
import { changeCardSecurityInput } from "utils/InputChange";
import { ColorType, CardFormType } from "types";
import { isValidSecurityCode } from "utils/InputValidation";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setSecurityCode: React.Dispatch<React.SetStateAction<CardFormType>>;
};

const CardSecurityInput = ({ fontColor, setSecurityCode }: CardPasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const isValid = isValidSecurityCode(inputRef.current?.value);

  const handleInput = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const securityCode = ref.value;
    ref.value = changeCardSecurityInput(securityCode);
    setSecurityCode((prev) => ({
      ...prev,
      cvc: {
        text: securityCode,
        isValid: isValidSecurityCode(securityCode),
      },
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="보안코드 (CVC/CVV)" />
      <InputContainer width={25}>
        <Input
          theme="primary"
          type="text"
          ref={inputRef}
          onChange={handleInput}
          fontColor={fontColor}
          active={true}
          error={!isValid}
        />
      </InputContainer>
      <Wrapper>
        {!isValid && <Text fontSize="xs" weight="bold" label="숫자 3자리 입력해주세요" fontColor="red" />}
      </Wrapper>
    </Layout>
  );
};

export default CardSecurityInput;
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
