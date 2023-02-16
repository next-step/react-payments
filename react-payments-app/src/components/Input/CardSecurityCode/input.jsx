const CardCVCInput = () => {
  return (
    <div className="input-container">
      <span className="input-title">보안코드(CVC/CVV)</span>
      <input className="input-basic w-25" type="password" />
      {/** TODO: CVC 섦명 아이콘 추가 */}
    </div>
  );
};

export default CardCVCInput;
