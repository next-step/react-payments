const CardExpirationInput = () => {
  return (
    <div className="input-container">
      <span className="input-title">만료일</span>
      <div className="input-box w-50">
        <input
          className="input-basic"
          type="text"
          placeholder="MM"
          maxLength={2}
        />
        <input
          className="input-basic"
          type="text"
          placeholder="YY"
          maxLength={2}
        />
      </div>
    </div>
  );
};

export default CardExpirationInput;
