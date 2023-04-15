type HandleOwnerProps = {
  value: string
}
interface CardOwnerProps {
  owner: string
  handleChange({ value }: HandleOwnerProps): void
}

const CardOwner = ({ owner, handleChange }: CardOwnerProps) => {
  return (
    <div className="input-container">
      <div className="input-title">
        <span>카드 소유자 이름(선택)</span>
        <span>{`${owner.length}`}/30</span>
      </div>
      <input
        type="text"
        className="input-basic"
        placeholder="카드에 표시된 이름과 동일하게 입력하세요."
        value={owner}
        onChange={(event) => handleChange({ value: event.target.value })}
      />
    </div>
  )
}

export default CardOwner
