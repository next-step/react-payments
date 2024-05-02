import { useEffect, useRef } from 'react'
import ui from '@/styles/index.module.css'
import { Input } from '../../common/Input'
import useCardInfo from '@/hooks/useCardInfo'

const MONTH_MAX = 12
const regx = new RegExp(/[0-9]/g)

export const CardDate = () => {
  const { cardInfo, updateCardInfo } = useCardInfo()

  const dateMMRef = useRef<HTMLInputElement>(null)
  const dateYYRef = useRef<HTMLInputElement>(null)

  const { cardNumber, cardType } = cardInfo

  useEffect(() => {
    if (
      cardNumber?.first?.length === 4 &&
      cardNumber.second?.length === 4 &&
      cardNumber.third?.length === 4 &&
      cardNumber.fourth?.length === 4
    ) {
      dateMMRef.current?.focus()
    }
  }, [cardNumber, cardType])

  if (!cardInfo) return null
  return (
    <div className={ui['row-container']}>
      <p className={'input-title'}>만료일</p>
      <div className={`${ui['input-row-container']} ${ui['w-50']}`}>
        <Input
          type="text"
          ref={dateMMRef}
          value={cardInfo.month ?? ''}
          onChange={(e) => {
            const { value } = e.target
            const month = Number(value)

            if (value && !value.match(regx)) return
            if (value === '00') return

            if (month > MONTH_MAX) return
            updateCardInfo({ ...cardInfo, month: value })
            if (value.length === 4) dateYYRef.current?.focus()
          }}
          maxLength={2}
          placeholder="MM"
        />
        {cardInfo.month ? '/' : ''}
        <Input
          type="text"
          ref={dateYYRef}
          value={cardInfo.year ?? ''}
          onChange={(e) => {
            const { value } = e.target
            if (value && !value.match(regx)) return
            if (value === '00') return

            updateCardInfo({ ...cardInfo, year: value })
          }}
          maxLength={2}
          placeholder="YY"
        />
      </div>
    </div>
  )
}
