import styled from 'styled-components';

export const PageTitle = styled.h2<{ mb?: number }>`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;

  color: #383838;

  margin-bottom: ${({ mb }) => mb && `${mb * 40 * 0.00625}rem`};
`;

export const InputTitle = styled.span`
  display: flex;
  align-items: center;

  font-size: 12px;
  line-height: 14px;

  margin-bottom: 4px;

  color: #525252;
`;

export const InputErrorMessage = styled.span`
  font-size: 12px;
  color: #fe4f6e;
`;
