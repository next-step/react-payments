import { forwardRef, ReactEventHandler } from "react";
import styled, { css } from "styled-components";
import { ColorType } from "types";

type InputProps = {
  type: string;
  placeholder?: string;
  theme: "underline" | "primary";
  fontColor?: ColorType;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  active: boolean;
};

export const Input = (
  { type, placeholder, theme, onChange, active, fontColor }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  return (
    <Layout
      type={type}
      placeholder={placeholder}
      theme={theme}
      onChange={onChange}
      ref={ref}
      active={active}
      disabled={!active}
      fontColor={fontColor}
      required
    />
  );
};

export default forwardRef(Input);

type LayoutProps = {
  theme: "underline" | "primary";
  active?: boolean;
  fontColor?: ColorType;
};

const Layout = styled.input<LayoutProps>`
  font-size: 16px;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  font-weight: 700;
  ${({ theme }) =>
    theme === "underline"
      ? css`
          text-align: center;
          border: none;
          background: none;
          outline: none;
          border-bottom: 1px solid #383838;
          width: 75%;
          padding: 5px;
        `
      : css`
          background-color: #ecebf1;
          height: 45px;
          width: 100%;
          text-align: center;
          outline: 2px solid transparent;
          outline-offset: 2px;
          border-color: #9ca3af;
          border: none;
          border-radius: 0.25rem;
          margin-left: 2px;
        `};
  ${({ fontColor }) =>
    fontColor === "red"
      ? css`
          color: #e14141;
        `
      : fontColor === "cyon"
      ? css`
          color: #92e3d5;
        `
      : fontColor === "blue"
      ? css`
          color: #557ce5;
        `
      : fontColor === "green"
      ? css`
          color: #73bc6d;
        `
      : fontColor === "pink"
      ? css`
          color: #e76e9b;
        `
      : fontColor === "yellow"
      ? css`
          color: #fbcc58;
        `
      : fontColor === "orange"
      ? css`
          color: #f37e3b;
        `
      : fontColor === "purple"
      ? css`
          color: #df59ba;
        `
      : css`
          color: black;
        `}
`;
