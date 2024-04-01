import ReactDom from 'react-dom';

interface ModalPortalProps extends React.PropsWithChildren {
  rootId?: string;
}

export const ModalPortal = ({ children, rootId }: ModalPortalProps) => {
  const root = document.getElementById(rootId || 'modal-root');

  if (!root) return null;

  return ReactDom.createPortal(children, root);
};
