import ui from '@/styles/index.module.css'
import { cardCompanyList } from '@/constant/cardCompany'
import useCardInfo from '@/hooks/useCardInfo'

export const CardType = ({ closeModal }: { closeModal: () => void }) => {
  const { cardInfo, updateCardInfo } = useCardInfo()

  if (!cardInfo) return null
  return (
    <div className={ui['modal-dimmed']} onClick={closeModal}>
      <div className={ui['modal']}>
        <div className={ui['flex-center']}>
          {cardCompanyList.map((value, _) => (
            <div className={ui[`modal-item-container`]} key={value.name}>
              <button
                className={ui['modal-item-name']}
                onClick={() => {
                  updateCardInfo({ ...cardInfo, cardType: value })
                  closeModal()
                }}
              >
                <div className={`${ui['modal-item-dot']} ${ui[value.theme || 'default']}`}></div>
                {value.name}카드
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
