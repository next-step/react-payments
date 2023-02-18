const CardOwner = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 소유자 이름(선택)</span>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
      />
    </div>
  )
}

export default CardOwner
export const CardOwnerType = (<CardOwner />).type
