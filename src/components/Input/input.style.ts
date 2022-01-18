import styled, { css } from 'styled-components';

export const InputContainer = styled.div<{
  width?: number;
  flexCenter?: boolean;
}>`
  margin: 16px 0;
  width: ${({ width }) => width && `${width}%`};
  ${({ flexCenter }) =>
    flexCenter &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;

export const InputBox = styled.div<{ width?: number }>`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background: #ecebf1;
  width: ${({ width }) => width && `${width}%`};
`;

export const InputUnderline = styled.input<{ width?: number }>`
  text-align: center;
  border: none;
  background: none;
  outline: none;

  margin: 16px 0;
  padding: 4px 0;

  border-bottom: 1px solid #383838;

  width: ${({ width }) => width && `${width}%`};
`;
