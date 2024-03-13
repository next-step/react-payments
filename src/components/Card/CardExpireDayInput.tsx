import { NumberInput } from "@/components/atom/NumberInput";
import { ComponentProps, useRef } from "react";
import styled from "styled-components";

const commonProps: ComponentProps<typeof NumberInput> = {
  variant: "borderLess",
  maxLength: 2,
  style: { textAlign: "center" },
};

export const CardExpireDayInput = () => {
  const inputRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string) => {
    if (!+value || (+value >= 1 && +value <= 12)) {
      return value;
    } else {
      alert("만기월은 1~12사이의 숫자만 가능합니다.");
      return "";
    }
  };

  return (
    <Container>
      <NumberInput
        {...commonProps}
        style={{ paddingRight: 0, textAlign: "right" }}
        placeholder="MM"
        ref={(elem) => {
          elem && (inputRef.current[0] = elem);
        }}
        onChange={handleChange}
      />
      <p>/</p>
      <NumberInput
        {...commonProps}
        style={{ paddingLeft: 0, textAlign: "left" }}
        placeholder="YY"
        ref={(elem) => {
          elem && (inputRef.current[1] = elem);
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
