import React from 'react'

const Button = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="button-box">
      <button type="button" className="button-text" onClick={onClick}>
        다음
      </button>
    </div>
  )
}
export default Button
