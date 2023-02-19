import { usePayments } from "../../../store/context";

const MAX_DATE_LENGTH = 2;

const CardExpirationDateInput = () => {
  const { expirationDate, handleExpirationDateInput } = usePayments();

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          maxLength={MAX_DATE_LENGTH}
          value={expirationDate[0]}
          onChange={handleExpirationDateInput(0)}
          required
        />
        {"/"}
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={MAX_DATE_LENGTH}
          value={expirationDate[1]}
          onChange={handleExpirationDateInput(1)}
          required
        />
      </div>
    </div>
  );
};

export default CardExpirationDateInput;
