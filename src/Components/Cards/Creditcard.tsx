import CardLayout from "./CardElements/Layout/CardLayout";
import CardTop from "./CardElements/Top/CardTop";
import CardMiddle from "./CardElements/Middle/CardMiddle";
import CardChip from "./CardElements/CardChip";
import CardBottom from "./CardElements/Bottom/CardBottom";
import CardInfo from "./CardElements/CardInfo";
import CardBottomNumber from "./CardElements/Bottom/CardBottomNumber";
import SmallCardLayout from "./CardElements/Layout/SmallCardLayout";

const Creditcard = () => {
  return (
    <CardLayout>
      <SmallCardLayout>
        <CardTop>
          <span className="card-text">클린카드</span>
        </CardTop>
        <CardMiddle>
          <CardChip />
        </CardMiddle>
        <CardBottom>
          <CardBottomNumber />
          <CardInfo />
        </CardBottom>
      </SmallCardLayout>
    </CardLayout>
  );
};
export default Creditcard;
