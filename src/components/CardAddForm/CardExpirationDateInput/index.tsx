import InputContainer from "components/Input/Container";
import Input from "components/Input/Item";
import Text from "components/Text";
import styled from "styled-components";
import { useRef } from "react";
import { checkMonth, checkYear } from "../../../utils/index";

const CardExpirationDateInput = ({ setExpirationDate, fontColor }) => {
  const inputMonthRef = useRef<HTMLInputElement>(null);
  const inputYearRef = useRef<HTMLInputElement>(null);

  const handleMonthInput = () => {
    const ref = inputMonthRef.current;
    if (ref === null) return;
    let month = checkMonth(ref.value);
    ref.value = checkMonth(month);

    if (!month.length) {
      month = "MM";
    }
    setExpirationDate((prev) => ({
      ...prev,
      month,
    }));
  };
  const handleYearInput = () => {
    const ref = inputYearRef.current;
    if (ref === null) return;
    let year = checkYear(ref.value);
    ref.value = year;
    if (!year.length) {
      year = "YY";
    }
    setExpirationDate((prev) => ({
      ...prev,
      year,
    }));
  };

  return (
    <Layout>
      <Title fontSize="xs" weight="normal">
        만료일
      </Title>
      <InputContainer width={50}>
        <Input
          type="text"
          placeholder="MM"
          theme="primary"
          onChange={handleMonthInput}
          ref={inputMonthRef}
          fontColor={fontColor}
          active={true}
        ></Input>
        <Input
          type="text"
          placeholder="YY"
          theme="primary"
          onChange={handleYearInput}
          ref={inputYearRef}
          fontColor={fontColor}
          active={true}
        ></Input>
      </InputContainer>
    </Layout>
  );
};
const Layout = styled.div`
  margin: 16px 0;
`;
const Title = styled(Text)`
  display: flex;
  align-items: center;
  margin-bottom: 4px;
  color: #525252;
`;

export default CardExpirationDateInput;
