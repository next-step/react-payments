import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Header from '../../components/Layout/Header'
import { useCardDispatch, useCardState } from '../../context/Card/hooks'
import { useAsync } from '../../hooks/Axios/useAsync'
import { getCards } from '../../server/cardApi'
import CardListCard, { CardListCardProps } from './Card'
import Styled from './index.style'

const CardList = () => {
  const cards = useCardState()
  const dispatch = useCardDispatch()
  const { state } = useAsync({
    callback: () => getCards(),
  })
  useEffect(() => {
    const cards = state.data
    if (cards) {
      dispatch({ type: 'INIT', payload: cards })
    }
  }, [dispatch, state.data])

  const [clickedCardId, setClickedCardId] = useState('')

  const cardList = useMemo(() => {
    if (state.loading) {
      return []
    }
    const cardKeys = Object.keys(cards)

    return cardKeys
      .reduce(
        (prev, cur) => [...prev, { ...cards[cur], id: cur }],
        [] as CardListCardProps[]
      )
      .sort((cardA, cardB) => cardB.createAt - cardA.createAt)
  }, [state.loading, cards])
  return (
    <>
      <Header title="보유카드" />
      <Styled.CardListContainer>
        {state.loading ? (
          <div>로딩중 ...</div>
        ) : (
          <>
            <Styled.AddCardContainer>
              <Link to="/create">
                <Styled.EmptyCard>+</Styled.EmptyCard>
              </Link>
            </Styled.AddCardContainer>
            {cardList.map((card) => (
              <CardListCard
                key={card.id}
                {...card}
                clicked={clickedCardId === card.id}
                setClickedCardId={setClickedCardId}
              />
            ))}
          </>
        )}
      </Styled.CardListContainer>
    </>
  )
}

export default CardList
