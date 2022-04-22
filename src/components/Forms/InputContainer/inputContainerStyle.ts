import styled, { css } from 'styled-components';

export const InputContainerEl = styled.div<{ isError?: boolean }>`
  margin: 16px 0;

  .error-message {
    ${({ isError }) => css`
      margin-top: 4px;
      font-size: 12px;
      line-height: 14px;
      height: 14px;
      ${isError ? `color: red;` : ''}
    `}
  }
`;

export const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
`;

export const InputTitle = styled.span<{ isError?: boolean }>`
  ${({ isError }) => css`
    color: ${isError ? 'red' : '#525252'};
  `}
`;
