import styled from "styled-components";

type InputProps = {
  type?: "text" | "password";
  placeholder?: string;
};

function Input({ type = "text", placeholder }: InputProps) {
  return <StyledInput type={type} placeholder={placeholder}></StyledInput>;
}

const StyledInput = styled.input`
  background-color: #ecebf1;
  height: 45px;
  width: 100%;
  text-align: center;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border: none;
  border-radius: 0.25rem;
`;

export default Input;
