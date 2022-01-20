import React, { FC } from 'react';
import styled from 'styled-components';

const InputContainer: FC<{
  title?: string;
  titleAfterNode?: React.ReactNode;
}> = ({ title = '', titleAfterNode, children }) => {
  return (
    <InputContainerEl>
      <InputLabel>
        {title && <InputTitle>{title}</InputTitle>}
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

const InputTitle = styled.span`
  color: #525252;
`;
