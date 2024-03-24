import CardTop from "./Top/CardTop";
import CardMiddle from "./Middle/CardMiddle";
import CardChip from "../CardElements/CardChip";
import CardBottom from "./Bottom/CardBottom";
import CardBottomNumber from "./Bottom/CardBottomNumber";
import CardInfo from "../CardElements/CardInfo";
import CardTitle from "./Top/CardTitle";
const CardBody = ({ className }: { className?: string }) => {
  return (
    <>
      <CardTop>
        <CardTitle className={className} />
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
