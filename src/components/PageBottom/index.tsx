import { FC } from 'react';
import styled from 'styled-components';

const PageBottom: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return <PageBottomEl className={className}>{children}</PageBottomEl>;
};

const PageBottomEl = styled.div`
  width: 100%;
  text-align: right;
`;

export const PageBottomText = styled.span`
  display: inline-block;
  min-width: 50px;
  line-height: 34px;
`;

export default PageBottom;
