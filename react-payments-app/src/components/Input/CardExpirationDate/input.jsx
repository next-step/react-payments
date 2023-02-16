const CardExpirationDateInput = () => {
  return (
    <div class="input-container">
      <span class="input-title">만료일</span>
      <div class="input-box w-50">
        <input class="input-basic w-50" type="text" placeholder="MM" />
        /<input class="input-basic w-50" type="text" placeholder="YY" />
      </div>
    </div>
  );
};

export default CardExpirationDateInput;
