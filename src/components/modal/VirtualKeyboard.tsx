import { BottomSheetContainer } from '@/components/modal'

const VirtualKeyboard = () => {
  return (
    <BottomSheetContainer>
      <div className="grid-repeat-3 w-100 px-5">
        {KEYBOARD.map(({ digit }) => (
          <button key={digit} type="button" className="digit-button">
            {digit}
          </button>
        ))}
      </div>
    </BottomSheetContainer>
  )
}

export default VirtualKeyboard

const KEYBOARD = [
  { digit: 0 },
  { digit: 1 },
  { digit: 2 },
  { digit: 3 },
  { digit: 4 },
  { digit: 5 },
  { digit: 6 },
  { digit: 7 },
  { digit: 8 },
  { digit: 9 },
  { digit: null },
  { digit: 'Delete' },
]
