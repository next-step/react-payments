import { MouseEvent, useState } from "react";
import styles from "./CardRegister.module.css";
import useBoolean from "../../../hooks/useBoolean";
import {
  CardNumber,
  CardType,
  ExpirationDate,
  TwoPasswordDigits,
} from "./types";
import PlasticCard from "../../component/PlaticCard/PlaticCard";
import CardNumberInput from "./Components/CardNumberInput/CardNumberInput";
import ExpirationInput from "./Components/ExpirationInput/ExpirationInput";
import CardHolderInput from "./Components/CardHolderInput/CardHolderInput";
import CvcInput from "./Components/CvcInput/CvcInput";
import PasswordInput from "./Components/PasswordInput/PasswordInput";
import SelectCardType from "./Components/SelectCardtype/SelectCardType";
import Button from "../../../components/Button/Button";

type CardRegistration = {
  cardNumber: CardNumber;
  expirationDate: ExpirationDate;
  cardHolder: string;
  cvc: string;
  password: TwoPasswordDigits;
  cardType: CardType;
};

interface CardRegisterProps {
  onSubmit: (value: CardRegistration) => void;
}

export default function CardRegister({
  onSubmit,
}: Readonly<CardRegisterProps>) {
  const [cardNumber, setCardNumber] = useState<CardNumber>();
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>();
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [password, setPassword] = useState<TwoPasswordDigits>();
  const [cardType, setCardType] = useState<CardType>("none");
  const [isShownCardTypeSelection, turnOn, turnOff] = useBoolean(false);

  const isAbledSubmit =
    cardNumber &&
    expirationDate &&
    cardHolder &&
    cvc &&
    password?.first &&
    password.second;

  function changeCardType(value: CardType) {
    setCardType(value);
    turnOff();
  }

  function moveBack() {
    window.history.back();
  }

  function submit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!isAbledSubmit) return;
    onSubmit({
      cardNumber,
      expirationDate,
      cardHolder,
      cvc,
      password,
      cardType,
    });
  }
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <a onClick={moveBack}>
          <div className={styles.nav__item}>{"<"}</div>
        </a>
        <div>카드추가</div>
      </div>
      <button className={styles.card__dummy} onClick={turnOn}>
        <PlasticCard
          cardNumber={cardNumber}
          expiration={expirationDate}
          holderName={cardHolder}
          cardType={cardType}
        />
      </button>
      <form className={styles.form}>
        <CardNumberInput value={cardNumber} onChange={setCardNumber} />
        <ExpirationInput value={expirationDate} onChange={setExpirationDate} />
        <CardHolderInput value={cardHolder} onChange={setCardHolder} />
        <div className={styles.cvc__container}>
          <CvcInput value={cvc} onChange={setCvc} />
        </div>
        <PasswordInput value={password} onChange={setPassword} />

        <div className={styles.submit__container}>
          {isAbledSubmit && <Button onClick={submit}>다음</Button>}
        </div>
      </form>
      {isShownCardTypeSelection && <SelectCardType onChange={changeCardType} />}
    </div>
  );
}
