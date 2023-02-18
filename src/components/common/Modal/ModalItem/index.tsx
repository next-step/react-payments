interface ModalItemProps {
  item: string;
  backgroundColor?: string;
}

const ModalItem = ({ item, backgroundColor = "#94dacd" }: ModalItemProps) => {
  return (
    <div className="modal-item-container">
      <div className="modal-item-dot" style={{ backgroundColor }}></div>
      <span className="modal-item-name">{item}</span>
    </div>
  );
};

export default ModalItem;
