import styled from '@emotion/styled';

export const CardPasswordDot = styled.div<{
  size: string;
  color: string;
}>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
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
  input {
    margin-right: 8px;
  }
`;
