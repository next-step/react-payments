import styled, { css } from "styled-components";
import { ReactEventHandler } from "react";

type ButtonProps = {
  size: "s" | "m" | "lg";
  onClick?: ReactEventHandler<HTMLButtonElement>;
  children: any;
};

export const Button = ({ children, size, onClick }: ButtonProps) => {
  return (
    <StyledButton size={size} onClick={onClick}>
      {children}
    </StyledButton>
  );
};
export default Button;

type StyledButtonProps = {
  size: "s" | "m" | "lg";
};

const StyledButton = styled.button<StyledButtonProps>`
  text-align: center;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;

  color: black;
  border: none;
  font-weight: 600;
  border-radius: 7px;
  background: #ecebf1;

  ${({ size }) =>
    size === "s"
      ? css`
          font-size: 16px;
        `
      : size === "m"
      ? css`
          font-size: 18px;
        `
      : css`
          font-size: 20px;
        `}
`;
