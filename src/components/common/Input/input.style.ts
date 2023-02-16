import styled, { css } from "styled-components";

import type { InputProps } from ".";

const outlinedInputStyle = css`
  background-color: #ecebf1;
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-color: #9ca3af;
  border-radius: 0.25rem;
`;

const underlinedInputStyle = css`
  background: none;
  outline: none;
  padding: 4px 0;
  border-bottom: 1px solid #383838;
`;

export const InputEl = styled.input<Pick<InputProps, "textAlign">>`
  height: 45px;
  width: 100%;
  text-align: ${(props) => props.textAlign};
  border: none;
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;

export const InputWrapper = styled.div<Pick<InputProps, "variant">>`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: ${(props) =>
    props.variant === "outlined" ? "#ecebf1" : "transparent"};
  ${InputEl} {
    ${(props) =>
      props.variant === "outlined" ? outlinedInputStyle : underlinedInputStyle}
  }
`;

export const InputContainer = styled.div``;
