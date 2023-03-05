import { useRef } from 'react'

import { useCardList } from '@/pages/card-list/hooks'
import { useCardInfo } from '@/pages/hooks'
import { getConvertedStringsByStars } from '@/utils'

const useCardCompleted = () => {
  const {
    cardInfo,
    cardInfo: {
      cardNumbers: { first, second, third, fourth },
      owner,
      name,
      nickname,
      expiredMonth,
      expiredYear,
    },
    handleNickname,
    resetCardInfo,
  } = useCardInfo()

  const { cardList, addCard } = useCardList()

  const nicknameRef = useRef<HTMLInputElement>(null)

  const handlePreNavigation = () => {
    const nicknameValue = nicknameRef.current?.value || name
    handleNickname(nicknameValue)
    // Todo: 업데이트된 닉네임이 반영된 cardInfo를 사용해야함
    addCard({ ...cardInfo, id: cardList.length, nickname: nicknameValue })
    resetCardInfo()
  }

  const cardNumbers = `${first} - ${second} - ${getConvertedStringsByStars(third)} - ${getConvertedStringsByStars(
    fourth,
  )}`
  const cardName = name
  const cardOwner = owner
  const cardExpiredDate = `${expiredMonth} / ${expiredYear}`
  const cardNickname = nickname

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
