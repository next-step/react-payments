import useSecurityCode from "../../../Hooks/useSecurityCode";

const CvcCcv = () => {
  const { securityCode, handleCodeChange } = useSecurityCode();

  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input
        className="input-basic w-25"
        type="password"
        value={securityCode || ""}
        onChange={handleCodeChange}
      />
    </div>
  );
};

export default CvcCcv;
