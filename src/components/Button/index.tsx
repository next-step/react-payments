import styled, { css } from "styled-components";
import { ReactEventHandler } from "react";

export type ButtonProps = {
  fontSize: "s" | "m" | "lg";
  label: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
};

export const Button = ({ label, fontSize, onClick }: ButtonProps) => {
  return (
    <StyledButton fontSize={fontSize} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
export default Button;

type StyledButtonProps = {
  fontSize: "s" | "m" | "lg";
};

const StyledButton = styled.button<StyledButtonProps>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  color: black;
  border: none;
  font-weight: 600;
  border-radius: 7px;
  background: #ecebf1;

  ${({ fontSize }) =>
    fontSize === "s"
      ? css`
          font-size: 16px;
        `
      : fontSize === "m"
      ? css`
          font-size: 18px;
        `
      : css`
          font-size: 20px;
        `}
`;
