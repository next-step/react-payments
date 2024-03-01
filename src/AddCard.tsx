import { useContext, useEffect, useState } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from './context/paymentContext'
import AllMaskingInput from './components/common/AllMaskingInput'
import StringInput from './components/common/StringInput'
import MaskingPartInput from './components/common/MaskingPartInput'
import ui from './styles/index.module.css'

type StepProps = {
  onBack: () => void
  onNext: () => void
}
const AddCard = ({ onBack, onNext }: StepProps) => {
  // const [, maskingValue, checkNumber] = useMasking({ ...props })
  const [selectType, setSelectType] = useState('')
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)
  const [isShowModal, setIsShowModal] = useState(false)

  useEffect(() => {
    if (selectType) updateCardInfo({ cardType: selectType })
  }, [selectType])

  return (
    <main>
      <button onClick={() => onBack()}>뒤로가기</button>
      <h2>1️⃣ 카드 추가</h2>
      <div className={ui['root']}>
        <div className={ui['app']}>
          <h2 className={ui['page-title']}>카드 추가</h2>
          <div className={ui['card-box']}>
            <div className={ui['empty-card']}>
              <div className={ui['card-top']}>{cardInfo.cardType}</div>
              <div className={ui['card-middle']}>
                <div className={ui['small-card__chip']}></div>
                <p>{cardInfo.cardNumber}</p>
              </div>
              <div className={ui['card-bottom']}>
                <div className={ui['card-bottom__info']}>
                  <div>
                    <span className={ui['card-text']}>{cardInfo.name || 'NAME'}</span>
                    <span className={ui['card-text']}>MM / YY</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={ui['input-container']}>
            <span className={ui['input-title']}>카드번호</span>
            <div className={ui['input-box']}>
              <MaskingPartInput totalText={19} number={4} divider={2} isMasking={true} placeholder="카드번호" maxLength={19} />
            </div>
          </div>
          <div className={ui['input-container']}>
            <span className={ui['input-title']}>만료일</span>
            <div className={`${ui['input-box']} ${ui['w-50']}`}>
              {/* <input className={ui['input-basic']} type={ui['text" placeholder=MM />
              <input className={ui['input-basic']} type={ui['text" placeholder=YY /> */}
            </div>
          </div>
          <div className={ui['input-container']}>
            <p>
              <span className={ui['input-title']}>카드 소유자 이름(선택)</span>
              <span>{cardInfo.name ? cardInfo.name.length : 0}/30</span>
            </p>

            <StringInput maxLength={30} placeholder="카드에 표시된 이름과 동일하게 입력하세요" />
          </div>
          <div className={ui['input-container']}>
            <span className={ui['input-title']}>보안코드(CVC/CVV)</span>
            <AllMaskingInput totalText={3} number={3} divider={0} isMasking={true} maxLength={3} />
          </div>
          <div className={ui['input-container']}>
            <span className={ui['input-title']}>카드 비밀번호</span>
            <AllMaskingInput totalText={2} number={2} divider={0} isMasking={true} maxLength={2} />
          </div>
          <div className={ui['button-box']}>
            <button
              className={ui['button-text']}
              onClick={() => {
                if (cardInfo.cardType) onNext()
                else setIsShowModal((state) => !state)
              }}
            >
              다음
            </button>
          </div>
        </div>
      </div>
      {isShowModal && (
        <div className={ui['modal-dimmed']} onClick={() => setIsShowModal(false)}>
          <div className={ui['modal']}>
            <div className={ui['flex-center']}>
              {['현대', '국민', '우리', '삼성', '비씨', '롯데', '신한', '하나'].map((value, idx) => (
                <div className={ui['modal-item-container']} key={idx}>
                  <div className={ui['modal-item-dot']}></div>
                  <button
                    className={ui['modal-item-name']}
                    onClick={() => {
                      setSelectType(value)
                      setIsShowModal(false)
                    }}
                  >
                    {value} 카드
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}

export default AddCard
