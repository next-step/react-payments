import { ComponentPropsWithoutRef, MouseEvent } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}

const CloseButton = ({ onClick, ...props }: Props) => {
  return (
    <button
      className='close-button'
      type='button'
      onClick={onClick}
      {...props}
    />
  );
};

export default CloseButton;
