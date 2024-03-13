import { useCallback, useContext } from 'react'
import { UpdateFunnelStepContext } from '../context/funnelStepContext'
import { CardInfo, CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'
import { CardBox } from '../components'
import ui from '../styles/index.module.css'

const CardList = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  const updateFunnelStep = useContext(UpdateFunnelStepContext)

  const deleteCard = useCallback((item: CardInfo) => {
    const deleteCard = cardInfo.cardList?.filter((card) => card.cardNo !== item.cardNo)
    updateCardInfo({ cardList: deleteCard })
  }, [])

  return (
    <>
      <h2>5️⃣ 카드 목록</h2>
      <div className={ui['root']}>
        <div className={`${ui['app']} ${ui['flex-column-center']}`}>
          <div className={ui['flex-center']}>
            <h2 className={`${ui['page-title']} ${ui['mb-10']}`}>보유 카드</h2>
          </div>
          <div className={ui['card-list-container']}>
            {cardInfo.cardList?.reverse().map((item, idx) => (
              <div key={idx} className={ui['card-item']}>
                <a
                  onClick={() => {
                    updateCardInfo({ ...item, cardList: cardInfo.cardList })
                    updateFunnelStep({ step: 'complete' })
                  }}
                >
                  <div>
                    <CardBox card={item} />
                    <span className={ui['card-nickname']}>{item.cardAlias}</span>
                  </div>
                </a>
                <div className={ui['card-delete-wrapper']}>
                  <button className={ui['delete-button']} onClick={() => deleteCard(item)}>
                    x
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className={ui['card-add-wrapper']}>
            <button className={ui['add-button']} onClick={() => updateFunnelStep({ step: 'add' })}>
              +
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
export default CardList
