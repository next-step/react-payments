import React from 'react'

const KEYPAD_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const DELETE = '←'

interface Props {
  fieldIndex: number
  onKeypadDown: (
    num: number,
    fieldIndex: number
  ) => (e: React.MouseEvent<HTMLButtonElement>) => void
  onKeypadDelete: (fieldIndex: number) => (e: React.MouseEvent<HTMLButtonElement>) => void
}

export default function VirtualKeypad({ onKeypadDown, onKeypadDelete, fieldIndex }: Props) {
  return (
    <div>
      {KEYPAD_NUMBERS.map((num, i) => {
        return (
          <button
            type="button"
            key={`keypad-${i}`}
            onClick={onKeypadDown(num, fieldIndex)}
            data-index={i}
          >
            {num}
          </button>
        )
      })}
      <button type="button" onClick={onKeypadDelete(fieldIndex)}>
        {DELETE}
      </button>
    </div>
  )
}
