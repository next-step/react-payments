import styled from '@emotion/styled';

export const LabelText = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;
  color: ${({ theme }) => theme.colors.gray2};
`;
