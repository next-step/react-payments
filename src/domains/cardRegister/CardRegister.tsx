import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import CardHolderInput from "./Components/CardHolderInput/CardHolderInput";
import CardNumberInput from "./Components/CardNumberInput/CardNumberInput";
import CvcInput from "./Components/CvcInput/CvcInput";
import ExpirationInput from "./Components/ExpirationInput/ExpirationInput";
import PasswordInput from "./Components/PasswordInput/PasswordInput";
import styles from "./CardRegister.module.css";
import PlasticCard from "../component/PlaticCard/PlaticCard";
import { CardNumber, ExpirationDate, TwoPasswordDigits } from "./types";

export default function CardRegister() {
  const [cardNumber, setCardNumber] = useState<CardNumber>();
  const [expirationDate, setExpirationDate] = useState<ExpirationDate>();
  const [cardHolder, setCardHolder] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [password, setPassword] = useState<TwoPasswordDigits>();

  const isAbledSubmit =
    cardNumber &&
    expirationDate &&
    cardHolder &&
    cvc &&
    password?.first &&
    password.second;

  const navigate = useNavigate();

  function moveBack() {
    window.history.back();
  }

  function makeParams() {
    const cardNumberUri = encodeURIComponent(JSON.stringify(cardNumber));
    const expirationDateUri = encodeURIComponent(
      JSON.stringify(expirationDate)
    );
    const cardHolderUri = encodeURIComponent(cardHolder);
    const cvcUri = encodeURIComponent(cvc);
    const passwordUri = encodeURIComponent(JSON.stringify(password));

    const queryParams = new URLSearchParams({
      cardNumber: cardNumberUri,
      expiration: expirationDateUri,
      holder: cardHolderUri,
      cvc: cvcUri,
      password: passwordUri,
    });

    return queryParams;
  }

  function submit(event: MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    if (!isAbledSubmit) return;
    const queryParams = makeParams();
    navigate(`/mycards/register/completed?${queryParams.toString()}`);
  }
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <a onClick={moveBack}>
          <div className={styles.nav__item}>{"<"}</div>
        </a>
        <div>카드추가</div>
      </div>
      <div className={styles.card__dummy}>
        <PlasticCard
          cardNumber={cardNumber}
          expiration={expirationDate}
          holderName={cardHolder}
          cardType="윤호"
        />
      </div>
      <form className={styles.form}>
        <CardNumberInput value={cardNumber} onChange={setCardNumber} />
        <ExpirationInput value={expirationDate} onChange={setExpirationDate} />
        <CardHolderInput value={cardHolder} onChange={setCardHolder} />
        <div className={styles.cvc__container}>
          <CvcInput value={cvc} onChange={setCvc} />
        </div>
        <PasswordInput value={password} onChange={setPassword} />

        <div className={styles.submit__container}>
          {isAbledSubmit && (
            <button className={styles.submit__btn} onClick={submit}>
              다음
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
