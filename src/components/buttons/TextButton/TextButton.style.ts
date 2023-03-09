import { Colors } from '@/styles/colors';
import styled from '@emotion/styled';

export const StyledTextButton = styled.button<{
  fontColor: Colors;
}>`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme, fontColor }) => theme.colors[fontColor]};
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  &:disabled {
    color: ${({ theme }) => theme.colors.gray1};
    cursor: not-allowed;
  }
`;
