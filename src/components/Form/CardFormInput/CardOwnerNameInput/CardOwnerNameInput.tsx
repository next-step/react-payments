import Text from "components/common/Text/Text";
import styled from "styled-components";
import Input from "../../../common/Input/Input";
import { useRef, useState } from "react";
import { changeOwnerName } from "utils/InputChange";
import { ColorType, CardFormType } from "types";

type CardOwnerNameInputProps = {
  fontColor: ColorType;
  setOwnerName: React.Dispatch<React.SetStateAction<CardFormType>>;
};

const CardOwnerNameInput = ({ setOwnerName, fontColor }: CardOwnerNameInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [inputlength, setInputLength] = useState(0);

  const handleInput = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const value = ref.value;
    const ownerName = changeOwnerName(value);
    ref.value = ownerName;
    setInputLength(ownerName.length);
    return !ownerName.length
      ? setOwnerName((prev) => ({
          ...prev,
          ownerName: {
            text: "Name",
            isValid: true,
          },
        }))
      : setOwnerName((prev) => ({
          ...prev,
          ownerName: {
            text: ownerName,
            isValid: true,
          },
        }));
  };
  return (
    <Layout>
      <Container>
        <Title fontSize="xs" weight="bold" label="카드 소유자 이름(선택)" />
        <Text fontSize="s" weight="normal" label={`${inputlength}/10`} />
      </Container>
      <Input
        type="text"
        theme="primary"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        ref={inputRef}
        onChange={handleInput}
        fontColor={fontColor}
        active={true}
      />
    </Layout>
  );
};

const Layout = styled.div`
  margin-top: 20px;
`;
const Title = styled(Text)`
  margin-bottom: 4px;
  color: #525252;
`;
const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CardOwnerNameInput;
