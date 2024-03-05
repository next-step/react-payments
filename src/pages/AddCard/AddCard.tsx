import React, { useEffect } from 'react'
import CardNumberInput from '../../components/CardNumberInput.tsx'
import DateInput from '../../components/DateInput.tsx'
import Input from '../../components/Input.tsx'
import Button from '../../components/Button.tsx'
import Title from '../../components/Title.tsx'
import IconButton from '../../components/IconButton.tsx'
import { useNavigate } from 'react-router-dom'
import { CardData } from './index.tsx'

const AddCardInfo = ({
  onNext,
  inputs,
  setInputs,
}: {
  onNext: () => void
  inputs: CardData
  setInputs: React.Dispatch<React.SetStateAction<CardData>>
}) => {
  // const cardNumRef = useRef(null)
  // const expiredDateRef = useRef(null)
  // const ownerNameRef = useRef(null)
  // const CVCRef = useRef(null)
  // const cardPasswordRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (!/^[0-9]*$/.test(inputs.CVC)) {
      alert('CVC 형식이 틀렸습니다.')

      setInputs({
        ...inputs,
        CVC: '',
      })

      return
    }
  }, [inputs.CVC])

  useEffect(() => {
    if (
      !/^[0-9]*$/.test(String(inputs.expiredMonth)) ||
      parseInt(inputs.expiredMonth) > 12
    ) {
      alert('카드 만료 날짜 - 월을 확인해주세요.')

      setInputs({
        ...inputs,
        expiredMonth: '',
      })

      return
    }
  }, [inputs.expiredMonth])

  useEffect(() => {
    if (!/^[0-9]*$/.test(inputs.cardNumberOne)) {
      alert('카드 번호는 숫자만 입력 가능합니다.')

      setInputs({
        ...inputs,
        cardNumberOne: '',
      })
      return
    }
    if (!/^[0-9]*$/.test(inputs.cardNumberTwo)) {
      alert('카드 번호는 숫자만 입력 가능합니다.')

      setInputs({
        ...inputs,
        cardNumberTwo: '',
      })
      return
    }
    if (!/^[0-9]*$/.test(inputs.cardNumberThree)) {
      alert('카드 번호는 숫자만 입력 가능합니다.')

      setInputs({
        ...inputs,
        cardNumberThree: '',
      })
      return
    }
    if (!/^[0-9]*$/.test(inputs.cardNumberFour)) {
      alert('카드 번호는 숫자만 입력 가능합니다.')

      setInputs({
        ...inputs,
        cardNumberFour: '',
      })
      return
    }
  }, [
    inputs.cardNumberOne,
    inputs.cardNumberTwo,
    inputs.cardNumberThree,
    inputs.cardNumberFour,
  ])

  const handleSubmit = () => {
    // 모든 Input 정보가 올바를 때
    console.log(inputs)
    onNext()
  }
  const navigate = useNavigate()
  const handleOnClick = () => {
    navigate('/list')
  }

  return (
    <>
      <div className="root">
        <div className="app">
          <Title>
            <IconButton
              onClick={handleOnClick}
              file={'/icons/back.svg'}
            ></IconButton>
            카드 추가
          </Title>
          <div className="card-box">
            <div className="empty-card">
              <div className="card-top"></div>
              <div className="card-middle">
                <div className="small-card__chip"></div>
              </div>
              <div className="card-bottom">
                <span className="card-text">
                  {inputs.cardNumberOne}
                  {inputs.cardNumberOne && '-'}
                  {inputs.cardNumberTwo}
                  {inputs.cardNumberTwo && '-'}
                  {inputs.cardNumberThree.split('').map(() => '*')}
                  {inputs.cardNumberThree && '-'}
                  {inputs.cardNumberFour.split('').map(() => '*')}
                </span>
                <div className="card-bottom__info">
                  <span className="card-text">{inputs.ownerName}</span>
                  <span className="card-text">
                    {inputs.expiredMonth} / {inputs.expiredYear}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <CardNumberInput
              one={inputs.cardNumberOne}
              two={inputs.cardNumberTwo}
              three={inputs.cardNumberThree}
              four={inputs.cardNumberFour}
              onChangeOne={(e) => {
                setInputs({ ...inputs, cardNumberOne: e.target.value })
              }}
              onChangeTwo={(e) => {
                setInputs({ ...inputs, cardNumberTwo: e.target.value })
              }}
              onChangeThree={(e) => {
                setInputs({ ...inputs, cardNumberThree: e.target.value })
              }}
              onChangeFour={(e) => {
                setInputs({ ...inputs, cardNumberFour: e.target.value })
              }}
            />
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <DateInput
              expiredMonth={inputs.expiredMonth}
              expiredYear={inputs.expiredYear}
              onChangeMonth={(e) => {
                setInputs({ ...inputs, expiredMonth: e.target.value })
              }}
              onChangeYear={(e) => {
                setInputs({ ...inputs, expiredYear: e.target.value })
              }}
            />
          </div>
          <Input
            label="카드 소유자 이름(선택)"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength={30}
            value={inputs.ownerName}
            onChange={(e) => {
              setInputs({ ...inputs, ownerName: e.target.value })
            }}
            isShowLength
          ></Input>
          <Input
            label="보안코드(CVC/CVV)"
            type="password"
            maxLength={3}
            size="md"
            value={inputs.CVC}
            onChange={(e) => {
              setInputs({ ...inputs, CVC: e.target.value })
            }}
          />
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <div className="flex-center gap-4">
              <Input
                type="password"
                maxLength={1}
                size="sm"
                value={inputs.cardPasswordOne}
                onChange={(e) => {
                  setInputs({ ...inputs, cardPasswordOne: e.target.value })
                }}
              />
              <Input
                type="password"
                maxLength={1}
                size="sm"
                value={inputs.cardPasswordTwo}
                onChange={(e) => {
                  setInputs({ ...inputs, cardPasswordTwo: e.target.value })
                }}
              />
              <span>*</span>
              <span>*</span>
            </div>
            <Button onClick={handleSubmit}>다음</Button>
          </div>
        </div>
      </div>
    </>
  )
}
export default AddCardInfo
