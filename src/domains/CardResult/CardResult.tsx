import { useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import PlasticCard from "../component/PlaticCard/PlaticCard";
import styles from "./CardResult.module.css";
import {
  CardNumber,
  ExpirationDate,
  TwoPasswordDigits,
} from "../cardRegister/types";

type CardQuery = {
  cardNumber: CardNumber;
  expiration: ExpirationDate;
  holder: string;
  cvc: string;
  password: TwoPasswordDigits;
};

export default function CardResult() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const params = useMemo(() => {
    const obj: Record<string, string> = {};
    searchParams.forEach((value, key) => {
      obj[key] = JSON.parse(decodeURIComponent(value));
    });
    return obj as unknown as CardQuery;
  }, [searchParams]);

  function moveToList() {
    navigate("/mycards");
  }

  return (
    <div className={styles.result__container}>
      <div>
        <div className={styles.result__description}>
          카드 등록이 완료되었습니다.
        </div>
        <div className={styles.result__card}>
          <PlasticCard
            cardNumber={params.cardNumber}
            cardType="윤호"
            holderName={params.holder}
            expiration={params.expiration}
          />
        </div>
        <div className={styles.result__check}>
          <button onClick={moveToList} className={styles.result__check_btn}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}
