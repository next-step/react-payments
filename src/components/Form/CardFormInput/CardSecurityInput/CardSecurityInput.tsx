import Text from "components/common/Text/Text";
import styled from "styled-components";
import Input from "../../../common/Input/Input";
import { useRef } from "react";
import { changeCardSecurityInput } from "utils/InputChange";
import { ColorType, CardFormType, CardFormInputsType } from "types";
import { isValidSecurityCode } from "utils/InputValidation";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setSecurityCodeText: React.Dispatch<React.SetStateAction<CardFormType>>;
  refs: CardFormInputsType;
  setCvcInput: (cvc: string) => void;
  isValid: boolean;
};

const CardSecurityInput = ({ fontColor, setSecurityCodeText, setCvcInput, refs, isValid }: CardPasswordInputProps) => {
  const handleInput = () => {
    if (!refs.cvc.ref) return;
    const securityCode = refs.cvc.ref.value;
    setCvcInput(changeCardSecurityInput(securityCode));
    setSecurityCodeText((prev) => ({
      ...prev,
      cvc: {
        text: securityCode,
        isValid: isValidSecurityCode(securityCode),
      },
    }));
    return isValidSecurityCode(securityCode) && refs.password.first.ref?.focus();
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="보안코드 (CVC/CVV)" />
      <Container>
        <Input
          theme="primary"
          type="text"
          ref={(el) => (refs.cvc.ref = el)}
          onChange={handleInput}
          fontColor={fontColor}
          active={true}
          error={!isValid}
        />
      </Container>
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
const Container = styled.div`
  width: 25%;
`;
