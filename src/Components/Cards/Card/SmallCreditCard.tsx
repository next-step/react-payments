import CardLayout from "../CardElements/Layout/CardLayout";
import CardBody from "../Body/CardBody";
import SmallCardLayout from "../CardElements/Layout/SmallCardLayout";
import CardNickName from "../Body/Bottom/CardNickName";

const SmallCreditcard = () => {
  return (
    <>
      <CardLayout>
        <SmallCardLayout>
          <CardBody />
        </SmallCardLayout>
      </CardLayout>
      <CardNickName />
    </>
  );
};
export default SmallCreditcard;
