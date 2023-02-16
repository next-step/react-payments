const CardPasswordInput = () => {
  return (
    <div class="input-container">
      <span class="input-title">카드 비밀번호</span>
      <input class="input-basic w-15 mr-10" type="password" />
      <input class="input-basic w-15 mr-10" type="password" />
      <input
        class="input-basic w-15 mr-10 input-of-pw"
        type="password"
        readOnly
        value="*"
      />
      <input
        class="input-basic w-15 mr-10 input-of-pw"
        type="password"
        readOnly
        value="*"
      />
    </div>
  );
};

export default CardPasswordInput;
