import { SyntheticEvent, useMemo } from 'react'

const getKeypadValues = () => '0123456789'.split('').sort(() => 0.5 - Math.random())

const KeypadModal = ({
  handleKeypadDown,
  handleKeypadBack,
}: {
  handleKeypadDown: (num: string) => void
  handleKeypadBack: (e: SyntheticEvent) => void
}) => {
  const keypads = useMemo(getKeypadValues, [])
  const handleClick = (num: string) => () => handleKeypadDown(num)
  return (
    <div className="keypad-modal" data-testid="keypad-modal">
      <div className="keypads">
        {keypads.map((num, i) => (
          <button className="item" key={i} onClick={handleClick(num)}>
            {num}
          </button>
        ))}
        <button className="item--back" onClick={handleKeypadBack}>
          ←
        </button>
      </div>
    </div>
  )
}

export default KeypadModal
