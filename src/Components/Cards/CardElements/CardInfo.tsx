import { useCardInfo } from "../../../Context/CardProvider";

const CardInfo = () => {
  const {
    state: {
      expiryDate: { MM, YY },
      cardOwnerName,
    },
  } = useCardInfo();
  return (
    <div className="card-bottom__info">
      <span className="card-text">
        {cardOwnerName ? cardOwnerName : "NAME"}
      </span>
      <span className="card-text">
        {MM && YY ? `${MM} / ${YY}` : "MM / YY"}
      </span>
    </div>
  );
};
export default CardInfo;
