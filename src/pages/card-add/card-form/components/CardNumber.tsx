const CardNumber = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input className="input-basic" type="text" data-name="first" />
        <input className="input-basic" type="text" data-name="second" />
        <input className="input-basic" type="password" data-name="third" />
        <input className="input-basic" type="password" data-name="fourth" />
      </div>
    </div>
  )
}

export default CardNumber
export const CardNumberType = (<CardNumber />).type
