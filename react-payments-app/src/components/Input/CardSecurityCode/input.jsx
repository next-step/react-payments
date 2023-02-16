const CardCVCInput = () => {
  return (
    <div class="input-container">
      <span class="input-title">보안코드(CVC/CVV)</span>
      <input class="input-basic w-25" type="password" />
      {/** TODO: CVC 섦명 아이콘 추가 */}
    </div>
  );
};

export default CardCVCInput;
