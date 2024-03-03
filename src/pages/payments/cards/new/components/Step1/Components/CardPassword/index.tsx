export const CardPassword = () => {
  return (
    <div className="input-container">
      <span className="input-title">카드 비밀번호</span>

      <div style={{ display: 'grid', gridTemplateColumns: '43px 43px 43px 43px', gap: '10px' }}>
        <input className="input-basic w-15" type="password" />
        <input className="input-basic w-15" type="password" />
        <input
          value={1}
          className="input-basic w-15"
          type="password"
          style={{ backgroundColor: 'transparent' }}
        />
        <input
          value={1}
          className="input-basic w-15"
          type="password"
          style={{ backgroundColor: 'transparent' }}
        />
      </div>
    </div>
  )
}
