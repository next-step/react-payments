import { PropsWithChildren } from 'react';

interface Props extends PropsWithChildren {
  onClickDimmed: () => void;
}

export const Modal = ({ children, onClickDimmed }: Props) => {
  return (
    <div className='modal-dimmed' onClick={onClickDimmed}>
      <div className='modal'>{children}</div>
    </div>
  );
};
