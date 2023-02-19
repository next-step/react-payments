import { usePayments } from "../../../store/context";

const MAX_CVC_LENGTH = 3;

const CardCVCInput = () => {
  const { cvc, handleCvcInput } = usePayments();
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        value={cvc}
        onChange={handleCvcInput}
        maxLength={MAX_CVC_LENGTH}
        required
      />
    </div>
  );
};

export default CardCVCInput;
