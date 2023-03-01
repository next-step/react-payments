import styled from '@emotion/styled';
import type { ChipProps } from './Chip.types';

export const Chip = styled.span<ChipProps>`
  display: inline-block;
  font-size: 13px;
  padding: 5px 20px;
  border-radius: 20px;
  cursor: pointer;

  color: ${({ theme, color = 'gray05' }) => theme.color[color]};
  background-color: ${({ theme }) => theme.color.gray01};
`;
