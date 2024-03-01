import { useContext, useEffect, useState } from 'react'
import { UpdateCardInfoContext } from '../../context/paymentContext'
import ui from '../../styles/index.module.css'

export const CardType = ({ setIsShowModal }: { setIsShowModal: () => void }) => {
  const updateCardInfo = useContext(UpdateCardInfoContext)
  const [selectType, setSelectType] = useState('')

  useEffect(() => {
    if (selectType) updateCardInfo({ cardType: selectType })
  }, [selectType])

  return (
    <div className={ui['modal-dimmed']} onClick={() => setIsShowModal()}>
      <div className={ui['modal']}>
        <div className={ui['flex-center']}>
          {['현대', '국민', '우리', '삼성', '비씨', '롯데', '신한', '하나'].map((value, idx) => (
            <div className={ui['modal-item-container']} key={idx}>
              <div className={ui['modal-item-dot']}></div>
              <button
                className={ui['modal-item-name']}
                onClick={() => {
                  setSelectType(value)
                  setIsShowModal()
                }}
              >
                {value} 카드
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
