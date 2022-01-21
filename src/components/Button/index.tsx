import { VFC, ReactNode } from 'react';
import styled from 'styled-components';

export interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button: VFC<
  ButtonProps & {
    children: ReactNode;
  }
> = ({ className = '', children, type = 'submit', onClick }) => {
  return (
    <ButtonEl type={type} className={className} onClick={onClick}>
      {children}
    </ButtonEl>
  );
};

const ButtonEl = styled.button`
  background: transparent;
  cursor: pointer;
`;

export default Button;
