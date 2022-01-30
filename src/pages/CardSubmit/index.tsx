import Card from '../../components/Card'
import Header from '../../components/Layout/Header'
import { useCardState } from '../../context/Card/hooks'
import Styled from './index.styled'

const CardSubmit = () => {
  const cardState = useCardState()

  const card = cardState[cardState.length - 1].card
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Header title="카드등록이 완료되었습니다." />
      </Styled.HeaderContainer>
      <Styled.CardBox>
        <Card {...card} size="big" />
      </Styled.CardBox>
    </Styled.Container>
  )
}

export default CardSubmit
