import CardBottom from "../Body/Bottom/CardBottom";
import CardChip from "../CardElements/CardChip";
import CardMiddle from "../Body/Middle/CardMiddle";
import CardTop from "../Body/Top/CardTop";
import CardInfo from "../CardElements/CardInfo";
import CardLayout from "../CardElements/Layout/CardLayout";
import EmptyCardLayout from "../CardElements/Layout/EmptyCardLayout";

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
