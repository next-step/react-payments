import CardLayout from "../CardElements/Layout/CardLayout";
import CardTop from "../Body/Top/CardTop";
import CardMiddle from "../Body/Middle/CardMiddle";
import CardChip from "../CardElements/CardChip";
import CardBottom from "../Body/Bottom/CardBottom";
import CardInfo from "../CardElements/CardInfo";
import CardBottomNumber from "../Body/Bottom/CardBottomNumber";
import SmallCardLayout from "../CardElements/Layout/SmallCardLayout";

const SmallCreditcard = () => {
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
export default SmallCreditcard;
