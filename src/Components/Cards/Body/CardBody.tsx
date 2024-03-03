import CardTop from "./Top/CardTop";
import CardMiddle from "./Middle/CardMiddle";
import CardChip from "../CardElements/CardChip";
import CardBottom from "./Bottom/CardBottom";
import CardBottomNumber from "./Bottom/CardBottomNumber";
import CardInfo from "../CardElements/CardInfo";

const CardBody = ({ className }: { className?: string }) => {
  return (
    <>
      <CardTop>
        <span className={`card-text ${className}`}>클린카드</span>
      </CardTop>
      <CardMiddle>
        <CardChip />
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber />
        <CardInfo />
      </CardBottom>
    </>
  );
};
export default CardBody;
