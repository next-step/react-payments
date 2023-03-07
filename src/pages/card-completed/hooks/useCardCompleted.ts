import { useRef, useContext } from 'react'

import { CardStateContext } from '@/contexts/card'
import { getCardExpiredDateDisplay } from '@/domain'
import { useCardList } from '@/pages/card-list/hooks'
import { useCardInfo } from '@/pages/hooks'
import { getConvertedStringsByStars } from '@/utils'

const useCardCompleted = () => {
  const cardInfo = useContext(CardStateContext)
  const { handleNickname, resetCardInfo } = useCardInfo()

  const { cardList, addCard } = useCardList()

  const nicknameRef = useRef<HTMLInputElement>(null)

  const handlePreNavigation = () => {
    const nicknameValue = nicknameRef.current?.value || cardInfo.name
    handleNickname(nicknameValue)
    // Todo: 업데이트된 닉네임이 반영된 cardInfo를 사용해야함
    addCard({ ...cardInfo, id: cardList.length, nickname: nicknameValue })
    resetCardInfo()
  }

  const { first, second, third, fourth } = cardInfo.cardNumbers

  const cardNumbers = `${first} - ${second} - ${getConvertedStringsByStars(third)} - ${getConvertedStringsByStars(
    fourth,
  )}`
  const cardName = cardInfo.name
  const cardOwner = cardInfo.owner
  const cardExpiredDate = getCardExpiredDateDisplay({
    expiredMonth: cardInfo.expiredMonth,
    expiredYear: cardInfo.expiredMonth,
  })
  const cardNickname = cardInfo.nickname

  return {
    nicknameRef,
    cardNumbers,
    cardOwner,
    cardExpiredDate,
    cardNickname,
    cardName,
    handlePreNavigation,
  }
}

export default useCardCompleted
