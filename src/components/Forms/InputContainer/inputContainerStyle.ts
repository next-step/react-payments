import styled, { css } from 'styled-components';

export const InputContainerEl = styled.div`
  margin: 16px 0;
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
