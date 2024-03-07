import { useMemo, useState } from "react";
import Modal from "../../../../../components/Modal/Modal";
import { CardType } from "../../types";
import styles from "./SelectCardType.module.css";
import { cardColor } from "../../constants";

interface SelectCardTypeProps {
  onChange?: (value: CardType) => void;
  value?: CardType;
}

export default function SelectCardType({
  value,
  onChange,
}: SelectCardTypeProps) {
  const [_, setSelected] = useState(value || "none");

  function selectCardType(value: CardType) {
    return function selectCardType() {
      setSelected(value);
      onChange && onChange(value);
    };
  }
  const selectIcons = useMemo(() => {
    return Object.entries<{ color: string }>(cardColor).map((card) => (
      <div className={styles.selectbox__item}>
        <button
          onClick={selectCardType(card[0] as CardType)}
          style={{
            backgroundColor: card[1].color,
            width: "37px",
            height: "37px",
            borderRadius: "20px",
            border: "none",
          }}
        ></button>
        <div className={styles.selectbox__item_title}>{card[0]}</div>
      </div>
    ));
  }, [onChange]);

  return (
    <Modal>
      <div className={styles.selectbox}>{selectIcons}</div>
    </Modal>
  );
}
