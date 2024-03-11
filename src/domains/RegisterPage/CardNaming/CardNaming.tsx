import styles from "./CardNaming.module.css";
import {
  CardNumber,
  CardType,
  ExpirationDate,
  TwoPasswordDigits,
} from "../CardRegister/types";
import PlasticCard from "../../component/PlaticCard/PlaticCard";
import Input from "../../../components/Input/Input";
import { ChangeEvent, useState } from "react";

export type CardQuery = {
  cardNumber: CardNumber;
  expiration: ExpirationDate;
  cardHolder: string;
  cvc: string;
  cardType: CardType;
  password?: TwoPasswordDigits;
};

export type NameQuery = {
  cardName: string;
};

interface CardNamingProps {
  card?: Omit<CardQuery, "password">;
  onSubmit: (value: NameQuery) => void;
}

export default function CardNaming({
  onSubmit,
  card,
}: Readonly<CardNamingProps>) {
  const [cardName, setCardName] = useState<string>("");
  function completeRegist() {
    onSubmit({ cardName: cardName ?? card?.cardType });
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
            holderName={card?.cardHolder}
            expiration={card?.expiration}
          />
        </div>
        <div className={styles.result__name}>
          <Input
            maxLength={10}
            placeholder="카드 별칭 (선택)"
            textAlign="center"
            hasUnderbar
            value={cardName}
            onChange={changeCardName}
          />
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
