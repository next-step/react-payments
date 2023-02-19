import Text from "components/Text";
import styled from "styled-components";
import Input from "../../Input/Item";
import { useRef, useState } from "react";
import { checkOwnerName } from "utils";

const CardOwnerNameInput = ({ setOwnerName, fontColor }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [length, setLength] = useState(0);

  const handleInput = () => {
    const ref = inputRef.current;
    if (ref === null) return;
    const value = ref.value;
    const ownerName = checkOwnerName(value);
    ref.value = ownerName;
    setLength(ownerName.length);
    return !ownerName.length ? setOwnerName("Name") : setOwnerName(ownerName);
  };
  return (
    <Layout>
      <Box>
        <Title fontSize="xs" weight="normal">
          카드 소유자 이름(선택)
        </Title>
        <Text fontSize="s" weight="normal">
          {`${length}/30`}
        </Text>
      </Box>
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
  margin: 16px 0;
`;
const Title = styled(Text)`
  margin-bottom: 4px;
  color: #525252;
`;
const Box = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default CardOwnerNameInput;
