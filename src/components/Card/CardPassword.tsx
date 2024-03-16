import { Input } from "@/components/atom/Input";
import { PinInput } from "@/components/atom/PinInput";
import { ComponentProps, useRef } from "react";
import styled from "styled-components";

type TProps = ComponentProps<typeof Input>;
export const CardPassword = ({ ...props }: TProps) => {
  const inputRef = useRef<HTMLInputElement[]>([]);
  const handleChange = (value: string) => {
    if (value.length === 1) {
      inputRef.current[1].focus();
    }
  };
  return (
    <Container>
      <PinInput
        {...props}
        style={{ width: "45px", ...props.style }}
        ref={(elem) => elem && (inputRef.current[0] = elem)}
        onChange={(e) => handleChange(e.target.value)}
      />
      <PinInput
        {...props}
        style={{ width: "45px", ...props.style }}
        ref={(elem) => elem && (inputRef.current[1] = elem)}
      />
      <PinInput readOnly value={"1"} mask variant="borderLess" />
      <PinInput readOnly value={"1"} mask variant="borderLess" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
`;
