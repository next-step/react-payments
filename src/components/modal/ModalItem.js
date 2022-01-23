const ModalItem = ({ name, onClickHandler }) => {
  return (
    <div
      className="modal-item-container"
      onClick={(eve) => onClickHandler(eve, name)}
    >
      <div className="modal-item-dot"></div>
      <span className="modal-item-name">{name}</span>
    </div>
  );
};

export default ModalItem;
