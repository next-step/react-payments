import { useExpireDateInput } from "../../../Hooks/useExpireDateInput";

const ExpireDate = () => {
  const MMInput = useExpireDateInput("MM");
  const YYInput = useExpireDateInput("YY");

  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          value={MMInput.value || ""}
          onChange={MMInput.handleChange}
        />
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          value={YYInput.value || ""}
          onChange={YYInput.handleChange}
        />
      </div>
    </div>
  );
};

export default ExpireDate;
