import { Link } from 'react-router-dom'
import {
  CardDesign,
  CardExpirationDate,
  CardNumber,
  CardOwnerName,
  CardPassword,
  CardSecurityCode,
} from '../../components/Card'
import { NUMBER_LENGTH_MAX, PASSWORD_LENGTH_MAX, SECURITY_CODE_LENGTH_MAX } from '../../constants/Card'
import { useCardNumberData } from '../../hooks/useCardNumber'
import { useExpirationDate } from '../../hooks/useExpirationDate'

const CardAdd = () => {
  const cardNumber = useCardNumberData(NUMBER_LENGTH_MAX)
  const cardExpirationDate = useExpirationDate()
  const cardSecurityCode = useCardNumberData(SECURITY_CODE_LENGTH_MAX)
  const cardPassword = useCardNumberData(PASSWORD_LENGTH_MAX)

  return (
    <div>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>
            <Link to='/'>&lt;</Link>카드 추가
          </h2>
          <CardDesign
            cardNumber={cardNumber.cardNumberData}
            cardExpirationDate={cardExpirationDate.cardExpirationDate}
          />
          <CardNumber
            cardNumberData={cardNumber.cardNumberData}
            cardNumberDataHandler={cardNumber.cardNumberDataHandler}
          />
          <CardExpirationDate
            cardExpirationDate={cardExpirationDate.cardExpirationDate}
            cardExpirationDateHandler={cardExpirationDate.cardExpirationDateHandler}
            fetchedTwoLettersDataHanlder={cardExpirationDate.fetchedTwoLettersDataHanlder}
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
