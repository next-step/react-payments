import { Link } from 'react-router-dom'
import CardDesign from '../../components/Card/CardDesign'
import CardNumber from '../../components/Card/CardNumber'
import { UseCardNumber } from '../../hooks/useCardNumber'

const CardAdd = () => {
  const { cardNumber, cardNumberHandler } = UseCardNumber()
  return (
    <div>
      <div className='root'>
        <div className='app'>
          <h2 className='page-title'>
            <Link to='/'>&lt;</Link>카드 추가
          </h2>
          <CardDesign />
          <CardNumber cardNumber={cardNumber} cardNumberHandler={cardNumberHandler} />
          <div className='input-container'>
            <span className='input-title'>만료일</span>
            <div className='input-box w-50'>
              <input className='input-basic' type='text' placeholder='MM' />
              <input className='input-basic' type='text' placeholder='YY' />
            </div>
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 소유자 이름(선택)</span>
            <input type='text' className='input-basic' placeholder='카드에 표시된 이름과 동일하게 입력하세요.' />
          </div>
          <div className='input-container'>
            <span className='input-title'>보안코드(CVC/CVV)</span>
            <input className='input-basic w-25' type='password' />
          </div>
          <div className='input-container'>
            <span className='input-title'>카드 비밀번호</span>
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
            <input className='input-basic w-15' type='password' />
          </div>
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
