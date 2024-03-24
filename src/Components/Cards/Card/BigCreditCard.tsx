import CardLayout from "../CardElements/Layout/CardLayout";
import BigCardLayout from "../CardElements/Layout/BigCardLayout";
import CardBody from "../Body/CardBody";
const BigCreditCard = () => {
  return (
    <CardLayout>
      <BigCardLayout>
        <CardBody className="__big" />
      </BigCardLayout>
    </CardLayout>
  );
};

export default BigCreditCard;
