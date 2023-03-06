import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { useRef } from 'react';
import { changePassword } from 'utils/InputChange';
import { ColorType, CardFormType, CardFormInputsType } from 'types';
import { isValidPasswordNumber } from 'utils/InputValidation';

type CardPasswordInputProps = {
  fontColor: ColorType;
  setPasswordText: React.Dispatch<React.SetStateAction<CardFormType>>;
  isValidFirst: boolean;
  isValidEnd: boolean;
  refs: CardFormInputsType;
};

const CardPasswordInput = ({ refs, fontColor, setPasswordText, isValidFirst, isValidEnd }: CardPasswordInputProps) => {
  const isValid = isValidFirst && isValidEnd;

  const handleInput = () => {
    if (!refs.password.first.ref || !refs.password.end.ref) return;
    const passWordFirst = changePassword(refs.password.first.ref.value);
    const passWordEnd = changePassword(refs.password.end.ref.value);
    refs.password.first.ref.value = passWordFirst;
    refs.password.end.ref.value = passWordEnd;

    setPasswordText((prev) => ({
      ...prev,
      password: {
        first: {
          text: passWordFirst,
          isValid: isValidPasswordNumber(passWordFirst),
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
          ref={(el) => (refs.password.first.ref = el)}
          onChange={handleInput}
          fontColor={fontColor}
          error={!isValidFirst}
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
      <Wrapper>
        {!isValid && <Text fontSize="xs" weight="bold" label="숫자 1자리씩 입력해주세요" fontColor="red" />}
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
const Container = styled.div`
  display: flex;
  width: 70%;
  gap: 5px;
`;
const Wrapper = styled.div`
  margin-top: 3px;
  padding-left: 3px;
`;

export default CardPasswordInput;
