import Input from "components/common/Input/Input";
import Text from "components/common/Text/Text";
import styled from "styled-components";
import { changeMonth, changeYear } from "utils/InputChange";
import { CardFormType, CardFormInputsType, ColorType } from "types";
import { isValidExpirationMonth, isValidExpirationYear } from "utils/InputValidation";
export type CardExpirationDateInputProps = {
  setExprireDateText: React.Dispatch<React.SetStateAction<CardFormType>>;
  setExpireDateMonthInput: (month: string) => void;
  setExpireDateYearInput: (year: string) => void;
  fontColor: ColorType;
  refs: CardFormInputsType;
  isValidMonth: boolean;
  isValidYear: boolean;
};

const CardExpirationDateInput = ({
  setExprireDateText,
  fontColor,
  refs,
  isValidMonth,
  isValidYear,
  setExpireDateMonthInput,
  setExpireDateYearInput,
}: CardExpirationDateInputProps) => {
  const isValid = isValidMonth && isValidYear;

  const handleMonthInput = () => {
    if (!refs.expireDate.month.ref || !refs.expireDate.year.ref) return;
    let month = changeMonth(refs.expireDate.month.ref.value);
    let year = changeYear(refs.expireDate.year.ref.value);

    setExpireDateMonthInput(month);
    setExprireDateText((prev) => ({
      ...prev,
      expireDate: {
        month: {
          text: month,
          isValid: isValidExpirationYear(month),
        },
        year: {
          text: year,
          isValid: isValidExpirationYear(year),
        },
      },
    }));
    return isValidExpirationMonth(month) && refs.expireDate.year.ref.focus();
  };

  const handleYearInput = () => {
    if (!refs.expireDate.month.ref || !refs.expireDate.year.ref) return;

    let month = changeMonth(refs.expireDate.month.ref.value);
    let year = changeYear(refs.expireDate.year.ref.value);

    setExpireDateYearInput(year);
    setExprireDateText((prev) => ({
      ...prev,
      expireDate: {
        month: {
          text: month,
          isValid: isValidExpirationYear(month),
        },
        year: {
          text: year,
          isValid: isValidExpirationYear(year),
        },
      },
    }));
    return isValidExpirationYear(year) && refs.ownerName.ref?.focus();
  };
  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="만료일" />
      <Container>
        <Input
          type="text"
          placeholder="MM"
          theme="primary"
          onChange={handleMonthInput}
          ref={(el) => (refs.expireDate.month.ref = el)}
          fontColor={fontColor}
          active={true}
          error={!isValidMonth}
        ></Input>
        <Input
          type="text"
          placeholder="YY"
          theme="primary"
          onChange={handleYearInput}
          ref={(el) => (refs.expireDate.year.ref = el)}
          fontColor={fontColor}
          active={true}
          error={!isValidYear}
        ></Input>
      </Container>
      <Wrapper>
        {!isValid && (
          <Text fontSize="xs" weight="bold" label="2자리씩 입력하세요. MM (01~12) / YY (01~99) " fontColor="red" />
        )}
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
const Wrapper = styled.div`
  margin-top: 3px;
  padding-left: 3px;
`;
const Container = styled.div`
  display: flex;
  width: 50%;
  gap: 5px;
`;
export default CardExpirationDateInput;
