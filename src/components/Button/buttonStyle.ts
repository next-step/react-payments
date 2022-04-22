import styled, { css } from 'styled-components';

export const ButtonEl = styled.button<{ disabled?: boolean }>`
  background: transparent;
  cursor: pointer;

  ${({ disabled }) => css`
    color: ${disabled ? '#c6c6c9' : '#383838'};
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
  `}
`;
