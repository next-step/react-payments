import { useCardInfo } from "../../../../Context/CardProvider";

const CardTitle = ({ className }: { className: string | undefined }) => {
  const {
    state: { cardName },
  } = useCardInfo();

  return (
    <span className={`card-text ${className}`}>
      {cardName ? cardName : "클린카드"}
    </span>
  );
};

export default CardTitle;
