import { useContext, useState } from 'react'
import { CardInfoContext, UpdateCardInfoContext } from '../context/paymentContext'
import { CardBox, CardCvc, CardName, CardNumber, CardPassword, CardDate } from '@/components'
import { StepProps } from './Payments'
import ui from '../styles/index.module.css'
import { CardType } from '@/components/CardInfo/CardType'

const AddCard = ({ onStep }: StepProps) => {
  const cardInfo = useContext(CardInfoContext)
  const updateCardInfo = useContext(UpdateCardInfoContext)

  const [isShowModal, setIsShowModal] = useState(false)
  const openModal = () => setIsShowModal(true)
  const closeModal = () => setIsShowModal(false)

  const today = new Date()

  const handleNextButtonClick = () => {
    if (!cardInfo.cardType?.name) {
      setIsShowModal((state) => !state)
      return
    }

    if (Object.keys(cardInfo).length < 6) {
      alert('모든 정보를 입력해주세요.')
      return
    }

    const { year, month } = cardInfo

    const todayYear = today.getUTCFullYear().toString().slice(2)
    const todayMonth = today.getMonth() + 1

    if (Number(todayYear) > Number(year)) {
      alert('유효기간을 확인해주세요')
      return
    }
    if (Number(todayYear) === Number(year) && Number(todayMonth) > Number(month)) {
      alert('유효기간을 확인해주세요')
      return
    }

    updateCardInfo({ ...cardInfo, cardNo: today.getTime() })
    if (onStep) onStep({ step: 'complete' })
  }

  return (
    <main>
      <div className={ui['root']}>
        <div className={ui['app']}>
          <h2 className={ui['page-title']}>
            <button onClick={() => onStep && onStep({ step: 'list' })}>&lt;</button>
            &nbsp; 카드 추가
          </h2>
          <CardBox openModal={openModal} closeModal={closeModal} />
          <CardNumber />
          <CardDate />
          <CardName />
          <CardCvc />
          <CardPassword />
          <div className={ui['button-box']}>
            <button onClick={handleNextButtonClick}>다음</button>
          </div>
        </div>
      </div>
      {isShowModal && <CardType closeModal={() => setIsShowModal(false)} />}
    </main>
  )
}

export default AddCard
