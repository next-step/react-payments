import { getSplitString4 } from "../../../util/regExp";
import CardBox from "../../CardBox";
import Chip from "../atom/Chip";
import Text from "../atom/Text";

export default function Card({
  alias = "",
  cardNumber = "",
  expirationDateMM = "",
  expirationDateYY = "",
  cardOwnerName = "",
  onClick = () => {},
  ...props
}) {
  // 카드 번호
  const displayCardNumber = getSplitString4(Object.values(cardNumber).join(""))
    .map((value, i) => {
      if (i >= 2) {
        return "*".repeat(value.length);
      }
      return value;
    })
    .join("-");

  // 만료일
  const displayExpirationDateMM = expirationDateMM || "MM";
  const displayExpirationDateYY = expirationDateYY || "YY";

  // 카드 소유자 이름(선택)
  const displayCardOwnerName = cardOwnerName;

  return (
    <CardBox onClick={onClick} {...props}>
      <div className="card-top">
        <Text>{alias}</Text>
      </div>
      <div className="card-middle">
        <Chip />
        <Text>{displayCardNumber}</Text>
      </div>
      <div className="card-bottom">
        <div className="card-bottom_info">
          <Text>{displayCardOwnerName}</Text>
          <Text>
            {displayExpirationDateMM} / {displayExpirationDateYY}
          </Text>
        </div>
      </div>
    </CardBox>
  );
}
