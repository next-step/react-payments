import { PropsWithChildren } from 'react';

interface ButtonProp {
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
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
