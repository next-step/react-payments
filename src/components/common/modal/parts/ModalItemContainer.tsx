import { PropsWithChildren } from 'react';

const ModalItemContainer = ({ children }: PropsWithChildren) => {
  return <div className="modal-item-container">{children}</div>;
};

export default ModalItemContainer;
