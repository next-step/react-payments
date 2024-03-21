import ReactDom from 'react-dom';

export const ModalPortal = ({ children }: React.PropsWithChildren) => {
  const root = document.getElementById('modal-root');

  if (!root) return null;

  return ReactDom.createPortal(children, root);
};
