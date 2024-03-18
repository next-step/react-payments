import React from 'react'
import CardNumberInput from '../../components/CardNumberInput.tsx'
import DateInput from '../../components/DateInput.tsx'
import Input from '../../components/Input.tsx'
import Button from '../../components/Button.tsx'
import Title from '../../components/Title.tsx'
import IconButton from '../../components/IconButton.tsx'
import { useNavigate } from 'react-router-dom'
import { CardData } from './index.tsx'

const CARD_ONE_SECTION_NUMBER_LENGTH = 4
const numeric_only_regex = /^[0-9]*$/

const AddCardInfo = ({
  handleSubmit,
  inputs,
  setInputs,
}: {
  handleSubmit: () => void
  inputs: CardData
  setInputs: (cardData: CardData) => void
}) => {
  const handleChangeExpiredMonth = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (
      !numeric_only_regex.test(String(inputs.expiredMonth)) ||
      parseInt(inputs.expiredMonth) > 12
    ) {
      alert('카드 만료 날짜 - 월을 확인해주세요.')
      return
    }
    setInputs({ ...inputs, expiredMonth: e.target.value })
  }

  const handleChangeExpiredYear = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, expiredYear: e.target.value })
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
                  {'*'.repeat(inputs.cardNumberThree.length)}
                  {inputs.cardNumberThree && '-'}
                  {'*'.repeat(inputs.cardNumberFour.length)}
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
              divider="-"
              inputs={[
                {
                  type: 'text',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.cardNumberOne,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, cardNumberOne: e.target.value })
                    }
                  },
                },
                {
                  type: 'text',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.cardNumberTwo,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, cardNumberTwo: e.target.value })
                    }
                  },
                },
                {
                  type: 'password',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.cardNumberThree,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, cardNumberThree: e.target.value })
                    }
                  },
                },
                {
                  type: 'password',
                  maxLength: CARD_ONE_SECTION_NUMBER_LENGTH,
                  value: inputs.cardNumberFour,
                  onChange: (e) => {
                    if (numeric_only_regex.test(e.target.value)) {
                      setInputs({ ...inputs, cardNumberFour: e.target.value })
                    }
                  },
                },
              ]}
            />
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <DateInput
              expiredMonth={inputs.expiredMonth}
              expiredYear={inputs.expiredYear}
              onChangeMonth={handleChangeExpiredMonth}
              onChangeYear={handleChangeExpiredYear}
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
            widthSize="md"
            value={inputs.CVC}
            onChange={(e) => {
              if (numeric_only_regex.test(e.target.value)) {
                setInputs({ ...inputs, CVC: e.target.value })
              }
            }}
          />
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <div className="flex-center gap-CARD_ONE_SECTION_NUMBER_LENGTH">
              <Input
                type="password"
                maxLength={1}
                widthSize="sm"
                value={inputs.cardPasswordOne}
                onChange={(e) => {
                  setInputs({ ...inputs, cardPasswordOne: e.target.value })
                }}
              />
              <Input
                type="password"
                maxLength={1}
                widthSize="sm"
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
