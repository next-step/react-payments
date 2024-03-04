import { PageStepContext } from "../../Context/PageStepProvider";
import { useContext } from "react";
import { useCardInfo } from "../../Context/CardProvider";

const ModalItem = ({ item }: { item: string }) => {
  const { handleCurrentStep } = useContext(PageStepContext);
  const { dispatch } = useCardInfo();
  const handleClick = () => {
    dispatch({
      type: "SET_CARD_NAME",
      payload: { key: "cardName", value: item },
    });
    handleCurrentStep();
  };

  return (
    <div className="modal-item-container" onClick={handleClick}>
      <div className="modal-item-dot"></div>
      <span className="modal-item-name">{item}</span>
    </div>
  );
};

export default ModalItem;
