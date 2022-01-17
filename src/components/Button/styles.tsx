import styled from '@emotion/styled';

export const ButtonBox = styled.button<{ mt50?: boolean }>`
  width: 100%;
  text-align: right;
  background-color: white;
  border: none;
  font-size: 16px;

  ${({ mt50 }) => mt50 && `margin-top: 11.5rem;`}
`;
export const ButtonText = styled.span`
  margin-right: 10px;
`;
