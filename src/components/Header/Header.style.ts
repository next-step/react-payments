import styled from '@emotion/styled';

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  h2 {
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    margin: 0;
    color: ${({ theme }) => theme.colors.gray4};
    line-height: 1.5;
  }
`;

export const LeftIconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 10px;
  background: none;
  border: none;
  outline: none;
`;
