import { FC } from 'react';
import styled from 'styled-components';

const InputContainer: FC<{
  title?: string;
}> = ({ title = '', children }) => {
  return (
    <InputContainerEl>
      {title && <InputTitle>{title}</InputTitle>}
      {children}
    </InputContainerEl>
  );
};

export default InputContainer;

const InputContainerEl = styled.div`
  margin: 16px 0;
`;

const InputTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 4px;
  color: #525252;
`;
