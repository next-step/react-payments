import styled, { css } from 'styled-components';
import { variant } from './type';

export const InputElement = styled.input<{
  variant?: variant;
}>`
  ${({ variant }) => css`
    text-align: center;
    ${variant === 'basic' &&
    `
      background-color: #ecebf1;
      height: 45px;
      width: 100%;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #9ca3af;
      border: none;
      border-radius: 0.25rem;
    `}
    ${variant === 'empty' &&
    `
      background-color: transparent;
      height: 45px;
      width: 100%;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: transparent;
      border: none;
      border-radius: 0.25rem;
    `}
    ${variant === 'underline' &&
    `
      border: none;
      background: none;
      outline: none;
      margin: 16px 0;
      padding: 4px 0;
      border-bottom: 1px solid #383838;
    `}
  `}
  &:invalid {
    color: red;
  }
`;

export default InputElement;
