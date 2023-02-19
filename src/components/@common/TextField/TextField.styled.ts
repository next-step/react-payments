import styled from '@emotion/styled';

export const TextField = styled.input`
  height: 45px;
  padding: 10px;
  border-radius: 7px;
  background-color: ${({ theme }) => theme.color.gray01};

  &::placeholder {
    color: ${({ theme }) => theme.color.gray05};
  }
`;
