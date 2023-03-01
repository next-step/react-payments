import styled from '@emotion/styled';

export const Fieldset = styled.fieldset`
  margin: 20px 0;
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${({ theme }) => theme.color.gray08};
  display: flex;
  margin-bottom: 3px;
`;

export const Separator = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.color.gray06};
  margin: 0 7px;
`;
