import { Link } from "react-router-dom";
import PlasticCard from "../component/PlaticCard/PlaticCard";
import styles from "./MyCards.module.css";
import useLocalStorage from "../../hooks/useLocalStorage";
import { initialCards } from "../../constants";
import { Card } from "../RegisterPage/CardRegister/types";
import Button from "../../components/Button/Button";

export default function MyCards() {
  const [cards, setCards] = useLocalStorage<Card[]>("mycards", initialCards);

  const latest = cards.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  function deleteCard(uuid: string) {
    return function deleteCard() {
      const filtered = latest.filter((value) => uuid !== value.uuid);
      setCards(filtered);
    };
  }

  return (
    <section className={styles.cards__layout}>
      <div className={styles.cards__list}>
        <Link to="/mycards/register">
          <div className={styles.card__link}>+</div>
        </Link>
        {latest.map((card) => {
          return (
            <div
              key={JSON.stringify(card.cardNumber)}
              className={styles.card__box}
            >
              <div className={styles.card__delBtn}>
                <Button onClick={deleteCard(card.uuid)}>지우기</Button>
              </div>
              <Link to={`modify?uuid=${card.uuid}`}>
                <PlasticCard
                  cardType={card.cardType}
                  cardNumber={card.cardNumber}
                  holderName={card.cardHolder}
                  expiration={card.expiration}
                />
              </Link>
              <div>{card.holderName}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
