import React from 'react'
import CardNumberInput from '../../components/CardNumberInput.tsx'
import DateInput from '../../components/DateInput.tsx'
import Input from '../../components/Input.tsx'
import CardSecret from '../../components/CardSecret.tsx'
import Button from '../../components/Button.tsx'
import Title from '../../components/Title.tsx'
import IconButton from '../../components/IconButton.tsx'
import { useNavigate } from 'react-router-dom'

const AddCardInfo = ({ onNext }: { onNext: () => void }) => {

    const navigate = useNavigate()
    const handleOnClick = () => {
      navigate('/list')
    }

  return (
    <>
      <div className="root">
        <div className="app">
          <Title>
            <IconButton onClick={handleOnClick} file={'/icons/back.svg'}>
            </IconButton>
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
          <div className="input-container">
            <span className="input-title">카드 소유자 이름(선택)</span>
            <Input />
          </div>
          <div className="input-container">
            <span className="input-title">보안코드(CVC/CVV)</span>
            <Input />
          </div>
          <div className="input-container">
            <span className="input-title">카드 비밀번호</span>
            <CardSecret />
          </div>
          <Button onClick={onNext}>다음</Button>
        </div>
      </div>
    </>
  )
}
export default AddCardInfo
