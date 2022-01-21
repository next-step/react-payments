import { FC } from 'react';
import styled from 'styled-components';

const PageContainer: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return <AppContainer className={className}>{children}</AppContainer>;
};

const AppContainer = styled.div`
  min-height: 100vh;
  padding: 16px 24px;
  box-sizing: border-box;
`;

export default PageContainer;
