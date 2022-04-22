import styled from 'styled-components'

const KEYPAD_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const DELETE = '←'

interface Props {
  fieldInfo?: string
  onKeypadDown: (num: number, fieldInfo: string) => void
  onKeypadDelete: (fieldInfo: string) => void
}

export default function VirtualKeypad(props: Props) {
  const { fieldInfo = '', onKeypadDown, onKeypadDelete } = props

  const handleKeypadDown = (num: number) => () => {
    onKeypadDown(num, fieldInfo)
  }
  const handleKeypadDelete = () => {
    onKeypadDelete(fieldInfo)
  }

  return (
    <Box>
      <Keypads>
        {KEYPAD_NUMBERS.map((num, i) => {
          return (
            <Button
              type="button"
              key={`keypad-${i}`}
              onClick={handleKeypadDown(num)}
              data-index={i}
            >
              {num}
            </Button>
          )
        })}
        <button type="button" onClick={handleKeypadDelete}>
          {DELETE}
        </button>
      </Keypads>
    </Box>
  )
}

const Box = styled.div`
  position: absolute;
  bottom: 50px;
  right: 0;
  transform: translateX(-50%);
  width: 120px;
  display: flex;
  flex-direction: row;
  padding: 6px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #777;
  z-index: 10;
`
const Keypads = styled.div`
  display: grid;
  width: 120px;
  height: 120px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 4px;
`

const Button = styled.button`
  border: 1px solid #777;
  border-radius: 3px;
  outline: 0;
  background-color: #f0f0f0;
  &:hover {
    background-color: #f0f0aa;
  }
`
