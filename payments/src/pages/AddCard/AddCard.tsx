import React, { useRef, useState,useEffect } from 'react'
import CardNumberInput from '../../components/CardNumberInput.tsx'
import DateInput from '../../components/DateInput.tsx'
import Input from '../../components/Input.tsx'
import CardSecret from '../../components/CardSecret.tsx'
import Button from '../../components/Button.tsx'
import Title from '../../components/Title.tsx'
import IconButton from '../../components/IconButton.tsx'
import { useNavigate } from 'react-router-dom'

const AddCardInfo = ({ onNext }: { onNext: () => void }) => {
  // const cardNumRef = useRef(null)
  // const expiredDateRef = useRef(null)
  // const ownerNameRef = useRef(null)
  // const CVCRef = useRef(null)
  // const cardPasswordRef = useRef<HTMLInputElement | null>(null)



  const [inputs, setInputs] = useState({
    cardNum: '',
    expiredDate: '',
    ownerName: '',
    CVC:'',
    cardPasswordOne:'',
    cardPasswordTwo:''
  })
  
  useEffect(() => {
    
    if (!/^[0-9]*$/.test(inputs.CVC)) {
      console.error('CVC 형식이 틀렸습니다.')

      setInputs({
        ...inputs,
        CVC: '',
      })

      return
    }
    

  }, [inputs.CVC])


  
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
                <div className="card-bottom__info">
                  <span className="card-text">NAME</span>
                  <span className="card-text">MM / YY</span>
                </div>
              </div>
            </div>
          </div>
          <div className="input-container">
            <span className="input-title">카드 번호</span>
            <CardNumberInput />
          </div>
          <div className="input-container">
            <span className="input-title">만료일</span>
            <DateInput />
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
