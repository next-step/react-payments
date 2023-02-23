import { PropsWithChildren } from 'react';

interface ButtonProp {
  onClick?: () => void;
}

export const Button = ({
  children,
  onClick,
}: PropsWithChildren<ButtonProp>) => {
  return (
    <button className="button-text" onClick={onClick}>
      {children}
    </button>
  );
};
