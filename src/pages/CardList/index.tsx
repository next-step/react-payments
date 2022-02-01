import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import { useCardDispatch, useCardState } from '../../context/Card/hooks'
import { useAsync } from '../../hooks/Axios/useAsync'
import { getCards } from '../../server/cardApi'
import Styled from './index.style'

const CardList = () => {
  const { state } = useAsync({
    callback: () => getCards(),
  })
  const cards = useCardState()
  const dispatch = useCardDispatch()
  useEffect(() => {
    const cards = state.data
    if (cards) {
      dispatch({ type: 'INIT', payload: cards })
    }
  }, [dispatch, state.data])

  return (
    <>
      <Header title="보유카드" />
      <Styled.CardListContainer>
        {state.loading ? (
          <div>로딩중 ...</div>
        ) : (
          <div>{JSON.stringify(cards)}</div>
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
