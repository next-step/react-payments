import styled from '@emotion/styled';

export const CardPasswordDot = styled.div<{
  color: string;
}>`
  width: 45px;
  high: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    color: ${({ color }) => color};
  }
`;
export const CardPasswordInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  div {
    margin-right: 8px;
  }
`;
