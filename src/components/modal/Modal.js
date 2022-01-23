const Modal = ({ onClickHandler, children }) => {
  return (
    <div className="modal-dimmed" onClick={onClickHandler}>
      <div className="modal">{children}</div>
    </div>
  );
};

export default Modal;
