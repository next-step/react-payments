import { useContext } from 'react'
import ui from '../styles/index.module.css'
import { UpdateFunnelStepContext } from '../context/funnelStepContext'
import { CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'
import { Input } from '../stories/Input'
import { CardBox } from '../components'

const AddComplete = () => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)
  const updateFunnelStep = useContext(UpdateFunnelStepContext)

  const { cardList, ...rest } = cardInfo

  return (
    <main>
      <h2>4️⃣ 카드 추가 완료</h2>
      <div className={ui['root']}>
        <div className={`${ui['app']} ${ui['flex-column-center']}`}>
          <div className={ui['flex-column-center']}>
            <h2 className={`${ui['page-title']} ${ui['mb-10']}`}>카드등록이 완료되었습니다.</h2>
          </div>
          <CardBox />

          <div className={`${ui['input-container']} ${ui['flex-column-center']} ${ui['w-100']}`}>
            <Input
              type="text"
              value={cardInfo.cardAlias || ''} //
              onChange={(e) => updateCardInfo({ ...cardInfo, cardAlias: e.target.value })}
              placeholder="카드 별칭 (선택)"
              className="input-underline"
              maxLength={10}
            />
          </div>
          <div className={`${ui['button-box']} ${ui['mt-50']}`}>
            <button
              className={ui['button-text']}
              onClick={() => {
                if (!cardInfo.cardAlias) updateCardInfo({ ...cardInfo, cardAlias: cardInfo.cardType })

                if (cardInfo.cardList) {
                  const index = cardInfo.cardList.findIndex((item) => item.cardNo === cardInfo.cardNo)
                  const result = cardInfo.cardList.map((item, idx) => {
                    if (idx === index) item.cardAlias = cardInfo.cardAlias
                    return item
                  })
                  if (index >= 0) updateCardInfo({ cardList: [...result] })
                  else updateCardInfo({ cardList: [...result, { ...rest }] })
                } else {
                  updateCardInfo({ cardList: [{ ...rest }] })
                }

                updateFunnelStep({ step: 'list' })
              }}
            >
              확인
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddComplete
