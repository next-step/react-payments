import { useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import Header from '../../components/Layout/Header'
import { ServerCardProps } from '../../context/Card/CardContext'
import { useCardDispatch, useCardState } from '../../context/Card/hooks'
import { useAsync } from '../../hooks/Axios/useAsync'
import { getCards } from '../../server/cardApi'
import Styled from './index.style'

export type CardListProps = ServerCardProps & { id: string }

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

  const cardList = useMemo(() => {
    if (state.loading) {
      return []
    }
    const cardKeys = Object.keys(cards)

    const cardList = cardKeys.reduce(
      (prev, cur) => [...prev, { ...cards[cur], id: cur }],
      [] as CardListProps[]
    )

    cardList.sort((cardA, cardB) => cardB.createAt - cardA.createAt)

    return cardList
  }, [state.loading, cards])
  return (
    <>
      <Header title="보유카드" />
      <Styled.CardListContainer>
        {state.loading ? (
          <div>로딩중 ...</div>
        ) : (
          <>
            {cardList.map((card) => (
              <>
                <Card key={card.id} {...card} />
                <Styled.CardNameText>{card.name}</Styled.CardNameText>
              </>
            ))}
          </>
        )}
        <Styled.CardContainer>
          <Link to="/create">
            <Styled.EmptyCard>+</Styled.EmptyCard>
          </Link>
        </Styled.CardContainer>
      </Styled.CardListContainer>
    </>
  )
}

export default CardList
