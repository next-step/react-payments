import { Link } from 'react-router-dom'
import {
  CardDesign,
  CardExpirationDate,
  CardNumber,
  CardOwnerName,
  CardPassword,
  CardSecurityCode,
} from '../../components/Card'
import {
  CARD_EXPIRATION_DATE_LENGTH_MAX,
  CARD_NUMBER_LENGTH_MAX,
  CARD_PSSWORD_LENGTH_MAX,
  CARD_SECURITY_CODE_LENGTH_MAX,
} from '../../constants/Card'
import { useCardNumberData } from '../../hooks/useCardNumber'

const CardAdd = () => {
  const cardNumber = useCardNumberData(CARD_NUMBER_LENGTH_MAX)
  const cardExpirationDate = useCardNumberData(CARD_EXPIRATION_DATE_LENGTH_MAX)
  const cardSecurityCode = useCardNumberData(CARD_SECURITY_CODE_LENGTH_MAX)
  const cardPassword = useCardNumberData(CARD_PSSWORD_LENGTH_MAX)

  return (
    <div>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>
            <Link to='/'>&lt;</Link>카드 추가
          </h2>
          <CardDesign cardNumber={cardNumber.cardNumberData} cardExpirationDate={cardExpirationDate.cardNumberData} />
          <CardNumber
            cardNumberData={cardNumber.cardNumberData}
            cardNumberDataHandler={cardNumber.cardNumberDataHandler}
          />
          <CardExpirationDate
            cardExpirationDate={cardExpirationDate.cardNumberData}
            cardExpirationDateHandler={cardExpirationDate.cardNumberDataHandler}
          />
          <CardOwnerName />
          <CardSecurityCode
            cardSecurityCode={cardSecurityCode.cardNumberData}
            cardSecurityCodeandler={cardSecurityCode.cardNumberDataHandler}
          />
          <CardPassword
            cardPassword={cardPassword.cardNumberData}
            cardPasswordHandler={cardPassword.cardNumberDataHandler}
          />
          <div className='button-box'>
            <Link to='/card-add-complete' className='button-text'>
              다음
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CardAdd
