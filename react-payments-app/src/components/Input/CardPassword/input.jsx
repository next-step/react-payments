const CardPasswordInput = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input className="input-basic w-15 mr-10" type="password" />
      <input className="input-basic w-15 mr-10" type="password" />
      <input
        className="input-basic w-15 mr-10 input-of-pw"
        type="password"
        readOnly
        value="*"
      />
      <input
        className="input-basic w-15 mr-10 input-of-pw"
        type="password"
        readOnly
        value="*"
      />
    </div>
  );
};

export default CardPasswordInput;
