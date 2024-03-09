import { TInputProps } from "@/types/input";
import styled from "styled-components";

export const Input = ({ variant = "default", ...props }: TInputProps) => {
  return <InputComponent {...props} variant={variant} />;
};

const InputComponent = styled.input<{ variant: TInputProps["variant"] }>`
  width: 100%;
  background-color: inherit;
  height: 45px;
  ${({ variant }) =>
    variant === "default" && {
      border: "1px solid #cbd5e0",
      borderRadius: "5px",
      padding: "0 1rem",
    }}
  ${({ variant }) =>
    variant === "borderLess" && {
      borderRadius: "5px",
      padding: "0 1rem",
    }}
`;
