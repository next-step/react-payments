import Input from 'components/common/Input/Input';
import Text from 'components/common/Text/Text';
import styled from 'styled-components';
import { CardFormInputsType, ColorType } from 'types';
export type CardExpirationDateInputProps = {
  onChange?: () => void;
  fontColor: ColorType;
  refs: CardFormInputsType;
  isValidMonth: boolean;
  isValidYear: boolean;
};

const CardExpirationDateInput = ({
  onChange,
  fontColor,
  refs,
  isValidMonth,
  isValidYear,
}: CardExpirationDateInputProps) => {
  const isValid = isValidMonth && isValidYear;

  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="만료일" />
      <Container>
        <Input
          type="text"
          placeholder="MM"
          theme="primary"
          onChange={onChange}
          ref={(el) => (refs.expireDate.month.ref = el)}
          fontColor={fontColor}
          active={true}
          error={!isValidMonth}
        />
        <Input
          type="text"
          placeholder="YY"
          theme="primary"
          onChange={onChange}
          ref={(el) => (refs.expireDate.year.ref = el)}
          fontColor={fontColor}
          active={true}
          error={!isValidYear}
        />
      </Container>
      {!isValid && (
        <Text fontSize="xs" weight="bold" label="2자리씩 입력하세요. MM (01~12) / YY (01~99) " fontColor="red" />
      )}
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
  width: 50%;
  gap: 5px;
`;
export default CardExpirationDateInput;
