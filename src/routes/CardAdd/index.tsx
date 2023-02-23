import { Link, useNavigate } from 'react-router-dom'
import {
  CardDesign,
  CardExpirationDate,
  CardNumber,
  CardOwnerName,
  CardPassword,
  CardSecurityCode,
} from '../../components/Card'
import CardShape from '../../components/Card/CardShape'
import Button from '../../components/Element/Button'
import {
  CARD_NUMBER_LENGTH_MAX,
  OWNER_NAME_LENGTH_MAX,
  PASSWORD_LENGTH_MAX,
  SECURITY_CODE_LENGTH_MAX,
} from '../../constants/Card'
import { useCardDesign } from '../../hooks/useCardDesign'
import { useCardNumberData } from '../../hooks/useCardNumber'
import { useExpirationDate } from '../../hooks/useExpirationDate'
import { useOwnerName } from '../../hooks/useOwnerName'

const CardAdd = () => {
  const navigate = useNavigate()

  const cardDesign = useCardDesign()
  const cardNumber = useCardNumberData(CARD_NUMBER_LENGTH_MAX)
  const cardExpirationDate = useExpirationDate()
  const ownerName = useOwnerName(OWNER_NAME_LENGTH_MAX)
  const cardSecurityCode = useCardNumberData(SECURITY_CODE_LENGTH_MAX)
  const cardPassword = useCardNumberData(PASSWORD_LENGTH_MAX)

  const validationNavigate = () => {
    const design = cardDesign.validation
    const number = !cardNumber.validation.includes(false)
    const expiration = !cardExpirationDate.validation.includes(false)
    const owner = ownerName.validation
    const security = cardSecurityCode.validation[0]
    const password = cardPassword.validation[0] && cardPassword.validation[1]

    if (design && number && expiration && owner && security && password) {
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
          <CardShape
            cardNumber={cardNumber.cardNumberData}
            cardExpirationDate={cardExpirationDate.cardExpirationDate}
            cardDesign={cardDesign.cardDesign}
            ownerName={ownerName.ownerName}
          />
          <Button onClick={cardDesign.toggleModalHandler}>카드선택</Button>
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
            <Button onClick={validationNavigate}>다음</Button>
          </div>
        </div>
        {cardDesign.toggleModal && <CardDesign cardDesignNameHandler={cardDesign.cardDesignNameHandler} />}
      </div>
    </div>
  )
}
export default CardAdd
