import { Link } from 'react-router-dom'
import Header from '../../components/Layout/Header'
import Styled from './index.style'

const CardList = () => {
  return (
    <>
      <Header title="보유카드" />
      <Styled.CardListContainer>
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
