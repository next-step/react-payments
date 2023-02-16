const CardOwnerInput = () => {
  return (
    <div class="input-container">
      <div class="input-title-box">
        <span class="input-title">카드 소유자 이름(선택)</span>
        <span class="input-title">0 / 30</span>
      </div>
      <input
        type="text"
        class="input-basic input-bigger-text"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </div>
  );
};

export default CardOwnerInput;
