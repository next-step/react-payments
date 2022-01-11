import styled from 'styled-components';

export const ButtonBox = styled.div<{ mt?: number }>`
  width: 100%;
  text-align: right;

  margin-top: ${({ mt }) => mt && `${mt * 40 * 0.00625}rem`};
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
