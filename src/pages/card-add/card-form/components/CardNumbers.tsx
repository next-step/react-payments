import { useRef, ChangeEvent } from 'react'

interface CardNumbersProps {
  numbers: {
    first: string
    second: string
    third: string
    fourth: string
  }
  handleChange(event: ChangeEvent<HTMLInputElement>): void
}

// Todo: Props로 State, setState가 결합되는걸 약하게 할 수 없을까?
const CardNumbers = ({ numbers, handleChange }: CardNumbersProps) => {
  const firstRef = useRef<HTMLInputElement>(null)
  const secondRef = useRef<HTMLInputElement>(null)
  const thirdRef = useRef<HTMLInputElement>(null)
  const fourthRef = useRef<HTMLInputElement>(null)

  const { first, second, third } = numbers

  //Todo: 다 쓰고나서 특정칸 수정할 때 에러 발생함
  // if (first.length >= 4 && secondRef.current) {
  //   secondRef.current.focus()
  // }
  // if (second.length >= 4 && thirdRef.current) {
  //   thirdRef.current.focus()
  // }
  // if (third.length >= 4 && fourthRef.current) {
  //   fourthRef.current.focus()
  // }

  return (
    <div className="input-container">
      <span className="input-title">카드 번호</span>
      <div className="input-box">
        <input
          ref={firstRef}
          className="input-basic"
          type="text"
          data-name="first"
          value={numbers.first}
          onChange={handleChange}
        />
        {first.length === 4 && <span>-</span>}
        <input
          ref={secondRef}
          className="input-basic"
          type="text"
          data-name="second"
          value={numbers.second}
          onChange={handleChange}
        />
        {second.length === 4 && <span>-</span>}
        <input
          ref={thirdRef}
          className="input-basic"
          type="password"
          data-name="third"
          value={numbers.third}
          onChange={handleChange}
        />
        {third.length === 4 && <span>-</span>}
        <input
          ref={fourthRef}
          className="input-basic"
          type="password"
          data-name="fourth"
          value={numbers.fourth}
          onChange={handleChange}
        />
      </div>
    </div>
  )
}

export default CardNumbers
export const CardNumbersType = (
  <CardNumbers
    numbers={{ first: '', second: '', third: '', fourth: '' }}
    //Todo: 이 부분 console.log 안쓰도록 수정
    handleChange={(_: ChangeEvent<HTMLInputElement>) => {
      console.log(_)
    }}
  />
).type
