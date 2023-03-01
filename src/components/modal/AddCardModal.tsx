import { CARD } from "constant";

const AddCardModal = () => {

  const handleCardCompany = (color: string) => {
    console.log(color)
  };

  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="grid-template">
          {CARD.COMPANY.map(({ name, color }: any) => (
            <div className="modal-item-container" onClick={() => handleCardCompany(color)}>
              <div className="modal-item-dot" style={{backgroundColor:color}}></div>
              <span className="modal-item-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
