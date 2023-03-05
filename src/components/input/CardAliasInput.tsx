import { RefObject } from 'react'
interface CardAliasInputProps {
  ref: RefObject<HTMLInputElement>
  defaultValue: string
}

const CardAliasInput = ({ ref, defaultValue }: CardAliasInputProps) => {
  return (
    <input
      ref={ref}
      defaultValue={defaultValue}
      className="input-underline w-75"
      type="text"
      placeholder="카드 별칭 (선택)"
      maxLength={10}
    />
  )
}

export default CardAliasInput
