import CardBottom from "./CardElements/Bottom/CardBottom";
import CardChip from "./CardElements/CardChip";
import CardMiddle from "./CardElements/Middle/CardMiddle";
import CardTop from "./CardElements/Top/CardTop";
import CardInfo from "./CardElements/CardInfo";
import CardLayout from "./CardElements/Layout/CardLayout";
import EmptyCardLayout from "./CardElements/Layout/EmptyCardLayout";

const EmptyCreditcard = () => {
  return (
    <CardLayout>
      <EmptyCardLayout>
        <CardTop />
        <CardMiddle>
          <CardChip />
        </CardMiddle>
        <CardBottom>
          <CardInfo />
        </CardBottom>
      </EmptyCardLayout>
    </CardLayout>
  );
};

export default EmptyCreditcard;
