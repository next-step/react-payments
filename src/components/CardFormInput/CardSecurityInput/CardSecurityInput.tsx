import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { changeCardSecurityInput } from 'utils/InputChange';
import { ColorType, CardFormType, CardFormInputsType } from 'types';
import { isValidSecurityCode } from 'utils/InputValidation';

type CardPasswordInputProps = {
  fontColor: ColorType;
  setCard: React.Dispatch<React.SetStateAction<CardFormType>>;
  refs: CardFormInputsType;
  isValid: boolean;
};

const CardSecurityInput = ({ fontColor, setCard, refs, isValid }: CardPasswordInputProps) => {
  const handleInput = () => {
    if (!refs.cvc.ref) return;
    const securityCode = refs.cvc.ref.value;
    refs.cvc.ref.value = changeCardSecurityInput(securityCode);
    const isNext = isValidSecurityCode(securityCode);
    if (isNext) {
      refs.password.start.ref?.focus();
    }
    setCard((prev) => ({
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
      {!isValid && <Text fontSize="xs" weight="bold" label="숫자 3자리 입력해주세요" fontColor="red" />}
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

const Container = styled.div`
  width: 25%;
`;
