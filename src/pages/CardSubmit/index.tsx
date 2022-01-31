import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import Header from '../../components/Layout/Header'
import { LocalCardProps } from '../../context/Card/CardContext'
import Styled from './index.styled'

type SubmitStateType = { newCard: { id: string; card: LocalCardProps } } | null
const CardSubmit = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const navigateState = state as SubmitStateType

  useEffect(() => {
    if (!navigateState) {
      navigate('/')
    }
  }, [navigate, navigateState])

  return (
    <>
      {navigateState && (
        <Styled.Container>
          <Styled.HeaderContainer>
            <Header title="카드등록이 완료되었습니다." />
          </Styled.HeaderContainer>
          <Styled.CardBox>
            <Card {...navigateState.newCard.card} size="big" />
          </Styled.CardBox>
        </Styled.Container>
      )}
    </>
  )
}

export default CardSubmit
