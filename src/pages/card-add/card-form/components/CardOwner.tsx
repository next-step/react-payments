import { ChangeEvent } from 'react'

interface CardOwnerProps {
  owner: string
  handleChange(event: ChangeEvent<HTMLInputElement>): void
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
        onChange={handleChange}
      />
    </div>
  )
}

export default CardOwner
export const CardOwnerType = (
  <CardOwner owner="" handleChange={(_: ChangeEvent<HTMLInputElement>) => _} />
).type
