import { forwardRef, ReactEventHandler } from "react";
import styled, { css } from "styled-components";

type InputProps = {
  type: string;
  placeholder?: string;
  theme: "underline" | "primary";
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  active?: boolean;
};

export const Input = (
  { type, placeholder, theme, onChange, active }: InputProps,
  ref: React.ForwardedRef<HTMLInputElement>
) => {
  // console.log(onChange, ref);
  return (
    <Layout
      type={type}
      placeholder={placeholder}
      theme={theme}
      onChange={onChange}
      ref={ref}
      active={active}
      disabled={active}
    />
  );
};

export default forwardRef(Input);

type LayoutProps = {
  theme: "underline" | "primary";
  active?: boolean;
};

const Layout = styled.input<LayoutProps>`
  font-size: 16px;
  opacity: ${(props) => (!props.active ? 1 : 0.5)};
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
`;
