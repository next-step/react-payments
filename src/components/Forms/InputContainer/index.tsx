import React, { FC } from 'react';
import styled, { css } from 'styled-components';

const InputContainer: FC<{
  className?: string;
  title?: string;
  titleAfterNode?: React.ReactNode;
  isError?: boolean;
}> = ({ title = '', titleAfterNode, children, isError, ...others }) => {
  return (
    <InputContainerEl {...others}>
      <InputLabel>
        {title && <InputTitle isError={isError}>{title}</InputTitle>}
        {title && titleAfterNode}
      </InputLabel>
      {children}
    </InputContainerEl>
  );
};

export default InputContainer;

const InputContainerEl = styled.div`
  margin: 16px 0;
`;

const InputLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
`;

const InputTitle = styled.span<{ isError?: boolean }>`
  ${({ isError }) => css`
    color: ${isError ? 'red' : '#525252'};
  `}
`;
