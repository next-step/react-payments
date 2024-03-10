import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../../context/paymentContext'
import ui from '../../styles/index.module.css'

export const CardType = ({ closeModal }: { closeModal: () => void }) => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  return (
    <div className={ui['modal-dimmed']} onClick={closeModal}>
      <div className={ui['modal']}>
        <div className={ui['flex-center']}>
          {['현대', '국민', '우리', '삼성', '비씨', '롯데', '신한', '하나'].map((value, _) => (
            <div className={ui['modal-item-container']} key={value}>
              <div className={ui['modal-item-dot']}></div>
              <button
                className={ui['modal-item-name']}
                onClick={() => {
                  updateCardInfo({ ...cardInfo, cardType: value })
                  closeModal()
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
