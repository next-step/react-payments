import styled from '@emotion/styled';

export const StyledTextButton = styled.button`
  border: none;
  outline: none;
  background: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
`;
