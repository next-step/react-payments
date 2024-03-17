import { useContext } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'
import { CardListContext, UpdateCardListContext } from '../context/cardListContext'
import { CardBox } from '../components'
import { Input } from '../components/common/Input'
import { StepProps } from './Payments'
import ui from '../styles/index.module.css'

const AddComplete = ({ onStep }: StepProps) => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  const cardList = useContext(CardListContext)
  const updateCardList = useContext(UpdateCardListContext)

  const handleClick = () => {
    if (!cardInfo.cardAlias) updateCardInfo({ ...cardInfo, cardAlias: cardInfo.cardType })

    if (cardList) {
      const index = cardList.findIndex((item) => item.cardNo === cardInfo.cardNo)
      const result = cardList.map((item, idx) => {
        if (idx === index) item.cardAlias = cardInfo.cardAlias
        return item
      })

      if (index >= 0) updateCardList(result)
      else updateCardList([...result, { ...cardInfo }])
    } else {
      updateCardList([{ ...cardInfo }])
    }
    updateCardInfo({})
    if (onStep) onStep({ step: 'list' })
  }

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
            <button className={ui['button-text']} onClick={handleClick}>
              확인
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default AddComplete
