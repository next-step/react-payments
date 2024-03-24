import CardLayout from "../CardElements/Layout/CardLayout";
import SmallCardLayout from "../CardElements/Layout/SmallCardLayout";
import CardNickName from "../Body/Bottom/CardNickName";
import CardTop from "../Body/Top/CardTop";
import CardMiddle from "../Body/Middle/CardMiddle";
import CardChip from "../CardElements/CardChip";
import CardBottom from "../Body/Bottom/CardBottom";
import { EnhancedSmallCreditCardType } from "../../../type/CardInfoType";

const NewSmallCreditcard = ({
  cardName,
  cardNumber,
  cardOwnerName,
  expiryDate,
  cardNickName,
  onClick,
}: EnhancedSmallCreditCardType) => {
  return (
    <>
      <CardLayout>
        <SmallCardLayout onClick={onClick}>
          <CardTop>
            <span className={`card-text`}>{cardName}</span>
          </CardTop>
          <CardMiddle>
            <CardChip />
          </CardMiddle>
          <CardBottom>
            <div className="card-bottom__number">
              <span className="card-text">
                {cardNumber?.section1} -{cardNumber?.section2} -
                {cardNumber?.section3} -{cardNumber?.section4}
              </span>
            </div>
            <div className="card-bottom__info">
              <span className="card-text">{cardOwnerName}</span>
              <span className="card-text">
                {`${expiryDate.MM} / ${expiryDate.YY}`}
              </span>
            </div>
          </CardBottom>
        </SmallCardLayout>
      </CardLayout>
      <CardNickName cardNickName={cardNickName} />
    </>
  );
};
export default NewSmallCreditcard;
