const CardNumberInput = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input className="input-basic" type="text" maxLength={4} />
        <input className="input-basic" type="text" maxLength={4} />
        <input className="input-basic" type="password" maxLength={4} />
        <input className="input-basic" type="password" maxLength={4} />
      </div>
    </div>
  );
};

export default CardNumberInput;
