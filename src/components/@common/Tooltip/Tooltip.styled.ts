import styled from '@emotion/styled';

export const Tooltip = styled.div``;

export const Content = styled.div`
  position: absolute;
  z-index: 1000000000;

  width: 160px;
  padding: 8px 10px;
  border-radius: 10px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.gray07};

  svg {
    margin-top: 5px;
  }
`;
