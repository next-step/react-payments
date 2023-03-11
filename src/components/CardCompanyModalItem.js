export default function CardCompanyModalItem({
  handleModalClick,
  dotColor,
  children,
}) {
  return (
    <div className="modal-item-container" onClick={handleModalClick}>
      <div className={"modal-item-dot " + dotColor}></div>
      <span className="modal-item-name">{children}</span>
    </div>
  );
}
