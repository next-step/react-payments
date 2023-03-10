import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { ColorType, CardFormInputsType } from 'types';

type CardPasswordInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  isValidStart: boolean;
  isValidEnd: boolean;
  refs: CardFormInputsType;
};

const CardPasswordInput = ({ refs, fontColor, onChange, isValidStart, isValidEnd }: CardPasswordInputProps) => {
  const isValid = isValidStart && isValidEnd;

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="카드 비밀번호" />
      <Container>
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={(el) => (refs.password.start.ref = el)}
          onChange={onChange}
          fontColor={fontColor}
          error={!isValidStart}
        />
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={(el) => (refs.password.end.ref = el)}
          onChange={onChange}
          fontColor={fontColor}
          error={!isValidEnd}
        />
        <Input theme="primary" type="text" active={false} />
        <Input theme="primary" type="text" active={false} />
      </Container>
      {!isValid && <Text fontSize="xs" weight="bold" label="숫자 1자리씩 입력해주세요" fontColor="red" />}
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
const Container = styled.div`
  display: flex;
  width: 70%;
  gap: 5px;
`;

export default CardPasswordInput;
