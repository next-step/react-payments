import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { ColorType, CardFormInputsType } from 'types';

type CardPasswordInputProps = {
  fontColor: ColorType;
  onChange?: () => void;
  refs: CardFormInputsType;
  isValid: boolean;
};

const CardSecurityInput = ({ fontColor, onChange, refs, isValid }: CardPasswordInputProps) => {
  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="보안코드 (CVC/CVV)" />
      <Container>
        <Input
          theme="primary"
          type="text"
          ref={(el) => (refs.cvc.ref = el)}
          onChange={onChange}
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
