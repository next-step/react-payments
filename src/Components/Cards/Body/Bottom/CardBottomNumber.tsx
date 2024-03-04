import { useCardInfo } from "../../../../Context/CardProvider";
const CardBottomNumber = () => {
  const { state } = useCardInfo();
  const { cardNumber } = state;
  const { section1, section2, section3, section4 } = cardNumber;

  return (
    <div className="card-bottom__number">
      <span className="card-text">
        {section1 ? section1 : "oooo"} -{section2 ? section2 : "oooo"} -
        {section3 ? section3 : "oooo"} -{section4 ? section4 : "oooo"}
      </span>
    </div>
  );
};

export default CardBottomNumber;
