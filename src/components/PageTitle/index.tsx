import { FC } from 'react';
import styled from 'styled-components';

const PageTitle: FC<{
  className?: string;
}> = ({ className = '', children }) => {
  return <PageTitleEl className={className}>{children}</PageTitleEl>;
};

const PageTitleEl = styled.h2`
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  display: flex;
  align-items: center;
  color: #383838;
`;

export default PageTitle;
