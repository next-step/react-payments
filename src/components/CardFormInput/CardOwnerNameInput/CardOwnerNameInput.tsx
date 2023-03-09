import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { useState } from 'react';
import { changeOwnerName } from 'utils/InputChange';
import { ColorType, CardFormType, CardFormInputsType } from 'types';

type CardOwnerNameInputProps = {
  fontColor: ColorType;
  setCard: React.Dispatch<React.SetStateAction<CardFormType>>;
  refs: CardFormInputsType;
};

const CardOwnerNameInput = ({ setCard, fontColor, refs }: CardOwnerNameInputProps) => {
  const [inputlength, setInputLength] = useState(0);

  const handleInput = () => {
    if (!refs.ownerName.ref) return;
    const ownerName = changeOwnerName(refs.ownerName.ref.value);
    refs.ownerName.ref.value = ownerName;
    setInputLength(ownerName.length);
    setCard((prev) => ({
      ...prev,
      ownerName: {
        text: ownerName.length ? ownerName : 'Name',
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
        ref={(el) => (refs.ownerName.ref = el)}
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
