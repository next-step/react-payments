import Text from "components/Text";
import styled from "styled-components";
import InputContainer from "../../Input/Container";
import Input from "../../Input";
import { useRef } from "react";
import { checkCardSecurityInput } from "utils";
import { ColorType, CardType } from "types";

type CardPasswordInputProps = {
  fontColor: ColorType;
  setSecurityCode: React.Dispatch<React.SetStateAction<CardType>>;
};

const CardSecurityInput = ({ fontColor, setSecurityCode }: CardPasswordInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const securityCode = ref.value;
    ref.value = checkCardSecurityInput(securityCode);
    setSecurityCode((prev) => ({
      ...prev,
      cvc: securityCode,
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal" label="보안코드 (CVC/CVV)" />
      <InputContainer width={25}>
        <Input theme="primary" type="text" ref={inputRef} onChange={handleInput} fontColor={fontColor} active={true} />
      </InputContainer>
    </Layout>
  );
};

export default CardSecurityInput;
const Layout = styled.div`
  margin: 16px 0;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;
