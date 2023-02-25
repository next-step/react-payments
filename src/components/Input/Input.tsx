import styled from "styled-components";
import { Size } from "../../types/common";

function Input({
  type = "text",
  placeholder,
  size = Size.Big,
  onChange,
  maxLength,
  name,
  forwardRef,
  readonly,
}: InputProps) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      widthSize={size}
      onChange={onChange}
      maxLength={maxLength}
      name={name}
      ref={forwardRef}
      readOnly={readonly}
      value={readonly ? "1" : undefined}
    ></StyledInput>
  );
}

type InputProps = {
  type?: "text" | "password";
  placeholder?: string;
  size?: Size;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  maxLength?: number;
  name?: string;
  forwardRef?: any;
  readonly?: boolean;
};

type StyledInputProps = {
  widthSize?: Size;
};

const StyledInput = styled.input<StyledInputProps>`
  background-color: #ecebf1;
  height: 45px;
  width: ${(props) => {
    switch (props.widthSize) {
      case "medium":
        return "25%";
      case "small":
        return "15%";
      default:
        return "100%";
    }
  }};
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
  margin-right: ${(props) => (props.widthSize === "small" ? "4px" : "")};
`;

export default Input;
