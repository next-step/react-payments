interface ModalItemNameProps {
  name: string;
}
const ModalItemName = ({ name }: ModalItemNameProps) => {
  return <span className="modal-item-name">{name}</span>;
};

export default ModalItemName;
