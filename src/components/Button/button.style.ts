import styled, { css } from 'styled-components';

export const ButtonBox = styled.div<{ mt?: number }>`
  width: 100%;
  text-align: right;

  margin-top: ${({ mt }) => mt && `${mt * 40 * 0.00625}rem`};
`;

export const ButtonText = styled.span<{ disabled?: boolean; warn?: boolean }>`
  margin-right: 10px;
  cursor: pointer;

  color: ${({ warn }) => warn && 'red'};

  ${({ disabled }) =>
    disabled &&
    css`
      color: #808080;
      cursor: not-allowed;
    `}
`;
