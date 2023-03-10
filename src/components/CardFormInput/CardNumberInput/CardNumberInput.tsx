import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import Input from '../../common/Input/Input';
import { ColorType, CardFormInputsType } from 'types';
type CardNumberInputProps = {
  onChange?: () => void;
  isValid: boolean;
  fontColor: ColorType;
  refs: CardFormInputsType;
};

const CardNumberInput = ({ onChange, isValid, fontColor, refs }: CardNumberInputProps) => {
  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="카드 번호" />
      <Input
        ref={(el) => (refs.cardNumbers.ref = el)}
        type="text"
        theme="primary"
        onChange={onChange}
        fontColor={fontColor}
        active={true}
        error={!isValid}
      />
      {!isValid && <Text fontSize="xs" weight="bold" label="카드 번호는 12자리여야 합니다." fontColor="red" />}
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

export default CardNumberInput;
