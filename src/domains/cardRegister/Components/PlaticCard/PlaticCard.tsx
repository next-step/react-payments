import { CardNumber, CardType, ExpirationDate } from "../../types";
import styles from "./PlasticCard.module.css";

interface PlasticCardProps {
  cardNumber?: CardNumber;
  expiration?: ExpirationDate;
  holderName?: string;
  cardType?: CardType;
}

export default function PlasticCard({
  cardNumber = {
    firstNumber: "",
    secondNumber: "",
    thirdNumber: "",
    fourthNumber: "",
  },
  expiration = { year: "YY", month: "MM" },
  holderName = "NAME",
  cardType,
}: PlasticCardProps) {
  const { firstNumber, secondNumber, thirdNumber, fourthNumber } = cardNumber;
  const { month, year } = expiration;
  return (
    <div
      className={`${styles.card__container} ${
        styles[cardType ? cardType : "none"]
      }`}
    >
      <div className={styles.card__name}>{cardType && `${cardType}카드`}</div>
      <div className={styles.card__chip}></div>
      <div
        className={styles.card__number}
      >{`${firstNumber} ${secondNumber} ${thirdNumber} ${fourthNumber}`}</div>
      <div className={styles.card__info}>
        <div className={styles.card__holder}>{holderName}</div>
        <div className={styles.card__expiration}>{`${month} / ${year}`}</div>
      </div>
    </div>
  );
}
