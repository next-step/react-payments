const CardPasswordInput = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input className="input-basic w-15" type="password" maxLength={1} />
      <input className="input-basic w-15" type="password" maxLength={1} />
      <input className="input-basic w-15" type="password" maxLength={1} />
      <input className="input-basic w-15" type="password" maxLength={1} />
    </div>
  );
};

export default CardPasswordInput;
