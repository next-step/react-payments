import { useCardInfo } from "../../../Context/CardProvider";
import { useExpireDateInput } from "../../../Hooks/Input/useExpireDateInput";

const ExpireDate = () => {
  const MMInput = useExpireDateInput("MM");
  const YYInput = useExpireDateInput("YY");
  const { state } = useCardInfo();
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          value={state.expiryDate.MM || ""}
          onChange={MMInput.handleChange}
        />
        /
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          value={state.expiryDate.YY || ""}
          onChange={YYInput.handleChange}
        />
      </div>
    </div>
  );
};

export default ExpireDate;
