import styled from '@emotion/styled';

interface ButtonBoxProps {
  mt50?: boolean;
}

export const ButtonBox = styled.button`
  width: 100%;
  text-align: right;
  background-color: white;
  border: none;
  font-size: 16px;

  ${({ mt50 }: ButtonBoxProps) => mt50 && `margin-top: 11.5rem;`}
`;
export const ButtonText = styled.span`
  margin-right: 10px;
`;
