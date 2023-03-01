import { css } from '@emotion/react';
import styled from '@emotion/styled';
import type { ButtonProps } from './Button.types';

export const Button = styled.button<ButtonProps>`
  padding: 15px 20px;
  border-radius: 10px;
  color: ${({ theme }) => theme.color.white};

  ${({ theme, color = 'gray07' }) => css`
    background-color: ${theme.color[color]};
  `};

  &:disabled {
    color: ${({ theme }) => theme.color.gray05};
    background-color: ${({ theme }) => theme.color.gray03};
  }
`;
