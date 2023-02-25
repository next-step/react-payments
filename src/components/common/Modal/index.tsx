import "./modal.css";
import ModalItem from "./ModalItem";
import { ModalItemType } from "./modal.type";

interface ModalProps {
  modalItem: ModalItemType[];
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Modal = ({ modalItem = [], onClick }: ModalProps) => {
  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="grid-center" onClick={onClick}>
          {modalItem.map(({ item, backgroundColor }) => (
            <ModalItem
              item={item}
              backgroundColor={backgroundColor}
              key={item}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
