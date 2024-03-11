import { useEffect, useState } from 'react'
import arrow from '../../assets/arrow.svg'
import question from '../../assets/question.svg'
import Container from '../container'
import Input from '../input/input'
import BasicLayout from '../layout/basicLayout'
import './registCard.css'
import CardBox from '../cardBox'
import useInput from '../../hooks/useInput'

type RegisterDataType = {
  cardNumber: string
  expirationDate: string
  ownerName: string
  placeholder?: string
  securityCode: string
  secretCode: string
}

const INITIAL_CARD_STATE: RegisterDataType = {
  cardNumber: '',
  expirationDate: '',
  ownerName: '',
  placeholder: '',
  securityCode: '',
  secretCode: '',
}

type RegistCardProps = {
  onNext?: (data?: any) => void
}
const RegistCard = (props: RegistCardProps) => {
  const [registerData, setRegisterData] = useState<RegisterDataType>(
    INITIAL_CARD_STATE,
  )
  
  const onClickNextHandler = () => {
    setRegisterData({
      cardNumber: cardNumberValue,
      expirationDate: expirationDateValue,
      ownerName: '',
      placeholder: '',
      securityCode: '',
      secretCode: '',
    })

    props.onNext && props.onNext()
  }

  // 빈 값일 때도 처리되어야함.
  /* functions */
  const isNumber = (input: string): boolean => {
    return new RegExp(/^[0-9]+$/).test(input)
  }

  const isShorterThan = (input: string, constractNumber: number) => {
    console.log('글자수 --- ', input.length)
    return input.length <= constractNumber
  }

  const isMonth = (input: string) => {
    return new RegExp(/^(0?[1-9]|1[0-2])$/).test(input)
  }
  // 데이터는 그대로 저장하면서 보여주기만 *로 보여줘야함
  const formatCardFunc = (input: string) => {
    // 전역 상태 라이브러리에 원본값 저장
    // setRegisterData({registerData, 'cardNumber': input})
    // 지금은 지워지지가 않음
    return input.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/, '$1-$2-••••-••••')
  }

  const formatDateFunc = (input: string) => {
    return input.replace(/(\d{2})(\d{2})/, '$1/$2')
  }

  const {
    value: cardNumberValue,
    handleChange: handleCardNumberFunc,
  } = useInput('', isNumber, formatCardFunc)

  const {
    value: expirationDateValue,
    handleChange: handleExpirationDateFunc,
  } = useInput(
    '',
    (input) => isShorterThan(input, 4) && isMonth(input.slice(0, 2)),
    formatDateFunc,
  )

  const {
    value: ownerNameValue,
    handleChange: handleOwnerNameFunc,
  } = useInput('', (input) => isShorterThan(input, 30))

  const {
    value: securityCodeValue,
    handleChange: handleSecurityCodeFunc,
  } = useInput(
    INITIAL_CARD_STATE.securityCode,
    (input) => isNumber(input) && isShorterThan(input, 3),
  )

  const {
    value: secretCodeValue,
    handleChange: handleSecretCodeValueFunc,
  } = useInput('', (input) => isNumber(input) && isShorterThan(input, 1))

  return (
    <>
      <BasicLayout>
        <BasicLayout.Header>
          <div style={{ display: 'flex' }}>
            <img src={arrow} />
            <h2 className="page-title" style={{ marginLeft: '15px' }}>
              카드 추가
            </h2>
          </div>
        </BasicLayout.Header>
        <BasicLayout.Main>
          <CardBox
            name={ownerNameValue}
            expirationDate={expirationDateValue}
            cardNumber={cardNumberValue}
          />
          <Container title="카드 번호">
            <Input value={cardNumberValue} onChange={handleCardNumberFunc} />
          </Container>
          <Container title="만료일">
            <div className="auto-sizing-width-item-35">
              <Input
                placeholder="MM/YY"
                value={expirationDateValue}
                onChange={handleExpirationDateFunc}
              />
            </div>
          </Container>
          <Container title="카드 소유자 이름(선택)">
            <Input
              placeholder="카드에 표시된 이름과 동일하게 입력하세요."
              value={ownerNameValue}
              onChange={handleOwnerNameFunc}
            />
          </Container>
          <Container title="보안코드(CVC/CVV)">
            <div className="auto-sizing-width-container">
              <Input
                value={securityCodeValue}
                onChange={handleSecurityCodeFunc}
              />
              <button>
                <img src={question} />
              </button>
            </div>
          </Container>
          <Container title="카드비밀번호">
            <div className="auto-sizing-width-container">
              <span className="auto-sizing-width-item">
                <Input
                  value={secretCodeValue}
                  onChange={handleSecretCodeValueFunc}
                />
              </span>
              <span className="auto-sizing-width-item">
                <Input
                  value={secretCodeValue}
                  onChange={handleSecretCodeValueFunc}
                />
              </span>
              <span className="auto-sizing-width-item dot-align">
                <div className="dot-hightlight" />
              </span>
              <span className="auto-sizing-width-item dot-align">
                <div className="dot-hightlight" />
              </span>
            </div>
          </Container>
        </BasicLayout.Main>
        <BasicLayout.Footer className="button-box">
          {/* button - isActive 상태 넣기 */}
          <button
            type="button"
            className="button-text"
            onClick={onClickNextHandler}
          >
            다음
          </button>
        </BasicLayout.Footer>
      </BasicLayout>
    </>
  )
}

export default RegistCard
