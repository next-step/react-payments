import styled, { css } from "styled-components";

import type { ButtonProps } from ".";

type ButtonStyle = Pick<ButtonProps, "variant" | "color">;

const setTextButtonStyle = (color: string) => css`
  color: ${color};
`;

const setContainedButtonStyle = (color: string) => css`
  color: #000000;
  border: 1px solid ${color};
  background-color: ${color};
`;

const setButtonStyle = ({
  variant = "text",
  color = "#94dacd",
}: ButtonStyle) => {
  if (variant === "text") {
    return setTextButtonStyle(color);
  } else if (variant === "contained") {
    return setContainedButtonStyle(color);
  }
};

export const Button = styled.button<ButtonStyle>`
  padding: 10px;
  border-radius: 5px;
  ${({ variant, color }) => setButtonStyle({ variant, color })}
`;
