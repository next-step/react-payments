import { FC } from 'react';
import styled from 'styled-components';

const InputBox: FC<{
  className?: string;
}> = ({ children, ...props }) => {
  return <InputBoxEl {...props}>{children}</InputBoxEl>;
};

export default InputBox;

const InputBoxEl = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.375rem;
  color: #d3d3d3;
  border-radius: 0.25rem;
  background-color: #ecebf1;
`;
