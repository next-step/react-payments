import { Link } from "react-router-dom";
import PlasticCard from "../component/PlaticCard/PlaticCard";
import styles from "./MyCards.module.css";

export default function MyCards() {
  return (
    <section className={styles.cards__layout}>
      <div className={styles.cards__list}>
        <PlasticCard
          cardType="윤호"
          cardNumber={{
            firstNumber: "1234",
            secondNumber: "1234",
            thirdNumber: "1234",
            fourthNumber: "1234",
          }}
          holderName="SUN"
          expiration={{ month: "12", year: "12" }}
        />
        <PlasticCard
          cardType="은규"
          cardNumber={{
            firstNumber: "1234",
            secondNumber: "1234",
            thirdNumber: "1234",
            fourthNumber: "1234",
          }}
          holderName="SUN"
          expiration={{ month: "12", year: "12" }}
        />
        <Link to="/mycards/register">
          <div className={styles.card__link}>+</div>
        </Link>
      </div>
    </section>
  );
}
