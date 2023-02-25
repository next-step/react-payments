import styled from '@emotion/styled';

export const EmptyCardButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  border: none;
  outline: none;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: ${({ theme }) => theme.colors.gray3};

  background: ${({ theme }) => theme.colors.gray0};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;
