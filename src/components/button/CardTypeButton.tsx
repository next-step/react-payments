import { CardBackgoundColor, CardColor } from '@/domain'

export interface CardTypeButtonProps {
  name: string
  backgroundColor: CardBackgoundColor
  color: CardColor
  selectCardType: (name: string, bg: string, color: string) => void
}

const CardTypeButton = ({ name, backgroundColor, color, selectCardType }: CardTypeButtonProps) => {
  return (
    <button
      key={name}
      className="flex-column-center gap-2 font-sm"
      onClick={() => selectCardType(name, backgroundColor, color)}
    >
      <div style={{ backgroundColor }} className="card-color" />
      <p>{name}</p>
    </button>
  )
}

export default CardTypeButton
