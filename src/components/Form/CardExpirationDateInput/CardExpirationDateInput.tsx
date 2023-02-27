import InputContainer from "components/Input/Container/Container";
import Input from "components/Input/Input";
import Text from "components/Text/Text";
import styled from "styled-components";
import { useRef } from "react";
import { checkMonth, checkYear } from "../../../utils/index";
import { CardFormType } from "types";
export type CardExpirationDateInputProps = {
  setExprireDate: React.Dispatch<React.SetStateAction<CardFormType>>;
};

const CardExpirationDateInput = ({ setExprireDate, fontColor }) => {
  const inputMonthRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);

  const handleInput = () => {
    if (inputMonthRef.current === null || inputYearRef.current === null) return;
    let month = checkMonth(inputMonthRef.current.value);
    let year = checkYear(inputYearRef.current.value);
    inputMonthRef.current.value = checkMonth(month);
    inputYearRef.current.value = checkYear(year);

    if (!month.length) {
      month = "MM";
    }
    if (!year.length) {
      year = "YY";
    }
    setExprireDate((prev) => ({
      ...prev,
      expireDate: {
        month: month,
        year: year,
      },
    }));
  };
  return (
    <Layout>
      <Title fontSize="xs" weight="bold" label="만료일" />
      <Container width={60}>
        <Input
          type="text"
          placeholder="MM"
          theme="primary"
          onChange={handleInput}
          ref={inputMonthRef}
          fontColor={fontColor}
          active={true}
        ></Input>
        <Input
          type="text"
          placeholder="YY"
          theme="primary"
          onChange={handleInput}
          ref={inputYearRef}
          fontColor={fontColor}
          active={true}
        ></Input>
      </Container>
      <Wrapper>
        <Text fontSize="xs" weight="bold" label="2자리씩 입력하세요. MM (01~12) / YY (01~99) " fontColor="red" />
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
const Container = styled(InputContainer)`
  gap: 5px;
`;
export default CardExpirationDateInput;
