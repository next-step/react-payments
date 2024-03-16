import { DetailedHTMLProps, HTMLAttributes } from 'react';

type BaseModalItemDot = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface ModalItemDotProps extends BaseModalItemDot {
  onClick: () => void;
}

const ModalItemDot = ({ onClick, style }: ModalItemDotProps) => {
  return <div className="modal-item-dot" style={style} onClick={onClick} />;
};

export default ModalItemDot;
