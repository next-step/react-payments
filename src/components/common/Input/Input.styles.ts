import styled, { css } from 'styled-components';
import type { RootProps } from './Input.types';

export const Root = styled.input<RootProps>`
  font-size: 16px;
  opacity: ${(props) => (props.active ? 1 : 0.5)};
  font-weight: 700;
  ${({ theme, error }) =>
    theme === 'underline'
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
          outline: 1px solid transparent;
          outline-color: ${error ? 'red' : 'none'};
          border: none;
          border-radius: 0.25rem;
        `};
  ${({ fontColor }) =>
    fontColor === 'red'
      ? css`
          color: #e14141;
        `
      : fontColor === 'cyon'
      ? css`
          color: #92e3d5;
        `
      : fontColor === 'blue'
      ? css`
          color: #557ce5;
        `
      : fontColor === 'green'
      ? css`
          color: #73bc6d;
        `
      : fontColor === 'pink'
      ? css`
          color: #e76e9b;
        `
      : fontColor === 'yellow'
      ? css`
          color: #fbcc58;
        `
      : fontColor === 'orange'
      ? css`
          color: #f37e3b;
        `
      : fontColor === 'purple'
      ? css`
          color: #df59ba;
        `
      : css`
          color: black;
        `}
`;
