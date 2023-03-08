import styled, { css } from "styled-components";
import { ReactEventHandler } from "react";
import { FontSizeType } from "types";
export type ButtonProps = {
  fontSize: FontSizeType;
  label: string;
  onClick?: ReactEventHandler<HTMLButtonElement>;
  className?: string;
};

export const Button = ({ className, label, fontSize, onClick }: ButtonProps) => {
  return (
    <StyledButton className={className} fontSize={fontSize} onClick={onClick}>
      {label}
    </StyledButton>
  );
};
export default Button;

type StyledButtonProps = {
  fontSize: FontSizeType;
  className?: string;
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
          font-size: 14px;
          line-height: 16px;
        `
      : fontSize === "m"
      ? css`
          font-size: 16px;
          line-height: 20px;
        `
      : fontSize === "lg"
      ? css`
          font-size: 20px;
          line-height: 22px;
        `
      : css`
          //xs일떄
          font-size: 12px;
          line-height: 14px;
        `}
`;
