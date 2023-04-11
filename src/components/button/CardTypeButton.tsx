interface CardTypeButtonProps {
  name: string
  // Todo: Color 타입 유니언 타입으로 지정해줘야 함 or 다른 방법
  backgroundColor: string
  color: string
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
