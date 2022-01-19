import styled, { css } from 'styled-components';
import { variant } from './type';

const InputElement = styled.input<{
  variant?: variant;
}>`
  ${({ variant }) => css`
    ${variant === 'basic' &&
    `
      background-color: #ecebf1;
      height: 45px;
      width: 100%;
      text-align: center;
      outline: 2px solid transparent;
      outline-offset: 2px;
      border-color: #9ca3af;
      border: none;
      border-radius: 0.25rem;
    `}
    ${variant === 'underline' &&
    `
      text-align: center;
      border: none;
      background: none;
      outline: none;
      margin: 16px 0;
      padding: 4px 0;
      border-bottom: 1px solid #383838;
    `}
  `}
`;

export default InputElement;
