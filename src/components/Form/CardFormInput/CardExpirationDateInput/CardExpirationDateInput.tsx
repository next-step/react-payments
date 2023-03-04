import Input from "components/common/Input/Input";
import Text from "components/common/Text/Text";
import styled from "styled-components";
import { useRef } from "react";
import { changeMonth, changeYear } from "../../../../utils/InputChange";
import { CardFormType } from "types";
import { isValidExpirationMonth, isValidExpirationYear } from "utils/InputValidation";
export type CardExpirationDateInputProps = {
  setExprireDate: React.Dispatch<React.SetStateAction<CardFormType>>;
};

const CardExpirationDateInput = ({ setExprireDate, fontColor }) => {
  const inputMonthRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);
  const isValidMonth = isValidExpirationMonth(inputMonthRef.current?.value);
  const isValidYear = isValidExpirationYear(inputYearRef.current?.value);
  const isValid = isValidMonth && isValidYear;

  const handleInput = () => {
    if (inputMonthRef.current === null || inputYearRef.current === null) return;
    let month = changeMonth(inputMonthRef.current.value);
    let year = changeYear(inputYearRef.current.value);
    inputMonthRef.current.value = changeMonth(month);
    inputYearRef.current.value = changeYear(year);

    if (!month.length) {
      month = "MM";
    }
    if (!year.length) {
      year = "YY";
    }
    setExprireDate((prev) => ({
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
  };
  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="만료일" />
      <Container>
        <Input
          type="text"
          placeholder="MM"
          theme="primary"
          onChange={handleInput}
          ref={inputMonthRef}
          fontColor={fontColor}
          active={true}
          error={!isValidMonth}
        ></Input>
        <Input
          type="text"
          placeholder="YY"
          theme="primary"
          onChange={handleInput}
          ref={inputYearRef}
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
