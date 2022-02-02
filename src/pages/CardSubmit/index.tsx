import { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Card from '../../components/Card'
import Header from '../../components/Layout/Header'
import { ServerCardProps } from '../../context/Card/CardContext'
import { useCardDispatch } from '../../context/Card/hooks'
import Styled from './index.styled'

type SubmitStateType = { newCard: { id: string; card: ServerCardProps } } | null

const CardSubmit = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const navigateState = state as SubmitStateType
  const nameRef = useRef<HTMLInputElement>(null)

  const dispatch = useCardDispatch()

  useEffect(() => {
    if (!navigateState) {
      navigate('/')
    }
  }, [navigate, navigateState])

  const newCard = navigateState !== null ? navigateState.newCard.card : null
  const onSubmit = () => {
    if (!nameRef.current?.value || !navigateState?.newCard.id) {
      navigate('/')
      return
    }

    const name = nameRef.current?.value

    const editedCard = JSON.parse(JSON.stringify(newCard)) as ServerCardProps

    console.log('아이디는?', navigateState?.newCard.id)

    console.log(editedCard)

    editedCard.name = name
    dispatch({
      type: 'EDIT',
      payload: { id: navigateState?.newCard.id, card: editedCard },
    })
    navigate('/')
  }

  return (
    <>
      {newCard && (
        <>
          <Styled.Container>
            <Styled.HeaderContainer>
              <Header title="카드등록이 완료되었습니다." />
            </Styled.HeaderContainer>
            <Styled.CenterBox>
              <Card {...newCard} size="big" />
            </Styled.CenterBox>
            <Styled.CenterBox>
              <Styled.CardNameInput
                maxLength={10}
                ref={nameRef}
                placeholder={(newCard.type ?? '클린') + '카드'}
              />
            </Styled.CenterBox>
          </Styled.Container>
          <Styled.SubmitButtonBox>
            <Styled.SubmitButton onClick={onSubmit}>확인</Styled.SubmitButton>
          </Styled.SubmitButtonBox>
        </>
      )}
    </>
  )
}

export default CardSubmit
