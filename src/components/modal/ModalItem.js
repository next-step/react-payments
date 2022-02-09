const ModalItem = ({ name, onClickHandler, color }) => {
  return (
    <div
      className="modal-item-container"
      onClick={(eve) => onClickHandler(eve, name, color)}
    >
      <div className="modal-item-dot" style={{ backgroundColor: color }}></div>
      <span className="modal-item-name">{name}</span>
    </div>
  );
};

export default ModalItem;
