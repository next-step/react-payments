import { CARD } from "constant";
import { CardCompany } from "store/type";

type CardCompanyProps = {
  handleCardCompany: (payload: CardCompany) => void;
};

const AddCardModal = ({ handleCardCompany }: CardCompanyProps) => {
  const handleClickCardCompany = (name: string, color: string) => {
    handleCardCompany({ name, color });
  };

  return (
    <div className="modal-dimmed">
      <div className="modal">
        <div className="grid-template">
          {CARD.COMPANY.map(({ name, color }: any) => (
            <div
              className="modal-item-container"
              key={name}
              onClick={() => handleClickCardCompany(name, color)}
            >
              <div
                className="modal-item-dot"
                style={{ backgroundColor: color }}
              ></div>
              <span className="modal-item-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCardModal;
