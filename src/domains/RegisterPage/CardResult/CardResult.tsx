import styles from "./CardResult.module.css";
import {
  CardNumber,
  CardType,
  ExpirationDate,
  TwoPasswordDigits,
} from "../CardRegister/types";
import PlasticCard from "../../component/PlaticCard/PlaticCard";
import Input from "../../../components/Input/Input";
import { ChangeEvent, useState } from "react";

type CardQuery = {
  cardNumber: CardNumber;
  expiration: ExpirationDate;
  holder: string;
  cvc: string;
  password: TwoPasswordDigits;
  cardType: CardType;
};

interface CardResultProps {
  card?: CardQuery;
  onSubmit: (value: { cardName: string }) => void;
}

export default function CardResult({
  onSubmit,
  card,
}: Readonly<CardResultProps>) {
  const [cardName, setCardName] = useState<string>("");
  function completeRegist() {
    onSubmit({ cardName });
  }

  function changeCardName(event: ChangeEvent<HTMLInputElement>) {
    setCardName(event.target.value);
  }

  return (
    <div className={styles.result__container}>
      <div>
        <div className={styles.result__description}>
          카드 등록이 완료되었습니다.
        </div>
        <div className={styles.result__card}>
          <PlasticCard
            cardNumber={card?.cardNumber}
            cardType={card?.cardType}
            holderName={card?.holder}
            expiration={card?.expiration}
          />
        </div>
        <div className={styles.result__name}>
          <Input textAlign="center" hasUnderbar onChange={changeCardName} />
        </div>
        <div className={styles.result__check}>
          <button onClick={completeRegist} className={styles.result__check_btn}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
