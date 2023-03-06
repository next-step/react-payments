import { CARD_EXPIRATION } from "../constants/card";

export default function CardExpirationInput({
  cardExpiration,
  onChange,
  ExpirationRefs,
}) {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic card-expiration"
          type="text"
          ref={(el) => (ExpirationRefs.current[0] = el)}
          name="month"
          placeholder="MM"
          onChange={onChange}
          value={cardExpiration["month"]}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
        ></input>
        {cardExpiration["month"].length === 2 && "/"}
        <input
          className="input-basic card-expiration"
          type="text"
          ref={(el) => (ExpirationRefs.current[1] = el)}
          name="year"
          placeholder="YY"
          onChange={onChange}
          value={cardExpiration["year"]}
          maxLength={CARD_EXPIRATION.MAX_LENGTH}
        ></input>
      </div>
    </div>
  );
}
