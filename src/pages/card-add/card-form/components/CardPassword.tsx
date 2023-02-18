const CardPassword = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>
      <input className="input-basic w-15" type="password" />
      <input className="input-basic w-15" type="password" />
      <input className="input-basic w-15" type="password" />
      <input className="input-basic w-15" type="password" />
    </div>
  )
}

export default CardPassword
export const CardPasswordType = (<CardPassword />).type
