import React, { ReactNode } from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h2`
  font-weight: 500;
  font-size: 16px;
  line-height: 18.75px;
  display: flex;
  align-items: center;
  color: #383838;
  margin-bottom: 10px;
`;

const Title = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <StyledTitle className={className?`${className}`:''}>{children}</StyledTitle>
  )
};
export default Title;