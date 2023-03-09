import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { changePassword } from 'utils/InputChange';
import { ColorType, CardFormType, CardFormInputsType } from 'types';
import { isValidPasswordNumber } from 'utils/InputValidation';

type CardPasswordInputProps = {
  fontColor: ColorType;
  setCard: React.Dispatch<React.SetStateAction<CardFormType>>;
  isValidStart: boolean;
  isValidEnd: boolean;
  refs: CardFormInputsType;
};

const CardPasswordInput = ({ refs, fontColor, setCard, isValidStart, isValidEnd }: CardPasswordInputProps) => {
  const isValid = isValidStart && isValidEnd;

  const handleInput = () => {
    if (!refs.password.start.ref || !refs.password.end.ref) return;
    const passWordStart = changePassword(refs.password.start.ref.value);
    const passWordEnd = changePassword(refs.password.end.ref.value);
    refs.password.start.ref.value = passWordStart;
    refs.password.end.ref.value = passWordEnd;
    const isNext = isValidPasswordNumber(passWordStart);
    if (isNext) {
      refs.password.end.ref?.focus();
    }
    setCard((prev) => ({
      ...prev,
      password: {
        start: {
          text: passWordStart,
          isValid: isValidPasswordNumber(passWordStart),
        },
        end: {
          text: passWordEnd,
          isValid: isValidPasswordNumber(passWordEnd),
        },
      },
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="카드 비밀번호" />
      <Container>
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={(el) => (refs.password.start.ref = el)}
          onChange={handleInput}
          fontColor={fontColor}
          error={!isValidStart}
        />
        <Input
          theme="primary"
          type="text"
          active={true}
          ref={(el) => (refs.password.end.ref = el)}
          onChange={handleInput}
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
