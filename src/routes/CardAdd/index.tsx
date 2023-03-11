import { Link, useNavigate } from 'react-router-dom'
import {
  CardDesign,
  CardExpirationDate,
  CardNumber,
  CardOwnerName,
  CardPassword,
  CardSecurityCode,
  CardShape,
} from '../../components/Card'
import Button from '../../components/Element/Button'
import {
  MAX_CARD_NUMBER_LENGTH,
  MAX_OWNER_NAME_LENGTH,
  MAX_PASSWORD_LENGTH,
  MAX_SECURITY_CODE_LENGTH,
} from '../../constants/Card'

import { useCardItemSetContext } from '../../contexts/cardContext'
import { useCardDesign } from '../../hooks/useCardDesign'
import { useCardNumberData } from '../../hooks/useCardNumber'
import { useExpirationDate } from '../../hooks/useExpirationDate'
import { useOwnerName } from '../../hooks/useOwnerName'

const CardAdd = () => {
  const navigate = useNavigate()
  const setCardItem = useCardItemSetContext()

  const cardDesign = useCardDesign()
  const cardNumber = useCardNumberData(MAX_CARD_NUMBER_LENGTH)
  const cardExpirationDate = useExpirationDate()
  const ownerName = useOwnerName(MAX_OWNER_NAME_LENGTH)
  const cardSecurityCode = useCardNumberData(MAX_SECURITY_CODE_LENGTH)
  const cardPassword = useCardNumberData(MAX_PASSWORD_LENGTH)

  const isValidCardData = () => {
    const design = cardDesign.validation
    const number = !cardNumber.validation.includes(false)
    const expiration = !cardExpirationDate.validation.includes(false)
    const owner = ownerName.validation
    const security = cardSecurityCode.validation[0]
    const password = cardPassword.validation[0] && cardPassword.validation[1]

    return design && number && expiration && owner && security && password
  }

  const onSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isValidCardData()) {
      setCardItem({
        nickName: '',
        cardDesign: cardDesign.cardDesign,
        cardNumber: cardNumber.cardNumberData,
        cardExpirationDate: cardExpirationDate.cardExpirationDate,
        ownerName: ownerName.ownerName,
        cardSecurityCode: cardSecurityCode.cardNumberData.num1,
        cardPassword: { password1: cardPassword.cardNumberData.num1, password2: cardPassword.cardNumberData.num2 },
      })
      navigate('/card-add-complete')
    } else {
      alert('입력한 값을 확인해주세요.')
    }
  }

  return (
    <div>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>
            <Link to='/'>&lt;</Link>카드 추가
          </h2>
          <form onSubmit={onSubmit}>
            <CardShape
              cardNumber={cardNumber.cardNumberData}
              cardExpirationDate={cardExpirationDate.cardExpirationDate}
              cardDesign={cardDesign.cardDesign}
              ownerName={ownerName.ownerName}
            />
            <Button type='button' onClick={cardDesign.toggleModalHandler}>
              카드선택
            </Button>
            <CardNumber
              cardNumberData={cardNumber.cardNumberData}
              cardNumberDataHandler={cardNumber.cardNumberDataHandler}
            />
            <CardExpirationDate
              cardExpirationDate={cardExpirationDate.cardExpirationDate}
              cardExpirationDateHandler={cardExpirationDate.cardExpirationDateHandler}
              fetchedTwoLettersDataHandler={cardExpirationDate.fetchedTwoLettersDataHandler}
            />
            <CardOwnerName ownerName={ownerName.ownerName} ownerNameValueHandler={ownerName.ownerNameValueHandler} />
            <CardSecurityCode
              cardSecurityCode={cardSecurityCode.cardNumberData}
              cardSecurityCodeHandler={cardSecurityCode.cardNumberDataHandler}
            />
            <CardPassword
              cardPassword={cardPassword.cardNumberData}
              cardPasswordHandler={cardPassword.cardNumberDataHandler}
            />
            <div className='button-box'>
              <Button type='submit'>다음</Button>
            </div>
          </form>
        </div>
        {cardDesign.toggleModal && <CardDesign cardDesignNameHandler={cardDesign.cardDesignNameHandler} />}
      </div>
    </div>
  )
}
export default CardAdd
