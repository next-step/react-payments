interface CardTypeButtonProps {
  name: string
  bg: string
  color: string
  selectCardType: (name: string, bg: string, color: string) => void
}

const CardTypeButton = ({ name, bg, color, selectCardType }: CardTypeButtonProps) => {
  return (
    <button key={name} className="flex-column-center gap-2 font-sm" onClick={() => selectCardType(name, bg, color)}>
      <div style={{ backgroundColor: bg }} className="card-color" />
      <p>{name}</p>
    </button>
  )
}

export default CardTypeButton
