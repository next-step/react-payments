import useCardPassword from "../../../Hooks/Input/useCardPassword";

const CardPassword = () => {
  const { cardPassword, handlePasswordChange } = useCardPassword();

  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input
        className="input-basic w-15"
        type="password"
        value={cardPassword.section1 || ""}
        onChange={handlePasswordChange("section1")}
        maxLength={1}
      />
      -
      <input
        className="input-basic w-15"
        type="password"
        value={cardPassword.section2 || ""}
        onChange={handlePasswordChange("section2")}
        maxLength={1}
      />
      -
      <input
        className="input-basic w-15"
        type="password"
        value={cardPassword.section3 || ""}
        onChange={handlePasswordChange("section3")}
        maxLength={1}
      />
      -
      <input
        className="input-basic w-15"
        type="password"
        value={cardPassword.section4 || ""}
        onChange={handlePasswordChange("section4")}
        maxLength={1}
      />
    </div>
  );
};

export default CardPassword;
