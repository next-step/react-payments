import { Link } from "react-router-dom";
import PlasticCard from "../component/PlaticCard/PlaticCard";
import styles from "./MyCards.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import { initialCards } from "../../constants";
import { Card } from "../RegisterPage/CardRegister/types";

export default function MyCards() {
  const [cards] = useLocalStorage<Card[]>("mycards", initialCards);
  return (
    <section className={styles.cards__layout}>
      <div className={styles.cards__list}>
        {cards.map((card) => {
          return (
            <PlasticCard
              key={JSON.stringify(card.cardNumber)}
              cardType={card.cardType}
              cardNumber={card.cardNumber}
              holderName={card.holderName}
              expiration={card.expiration}
            />
          );
        })}
        <Link to="/mycards/register">
          <div className={styles.card__link}>+</div>
        </Link>
      </div>
    </section>
  );
}
