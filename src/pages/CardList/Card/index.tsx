import { Dispatch, SetStateAction, useCallback } from 'react'
import Card from '../../../components/Card'
import { ServerCardProps } from '../../../context/Card/CardContext'
import { useCardDispatch } from '../../../context/Card/hooks'
import Styled from './index.style'

type CardClickProps = {
  clicked?: boolean
  setClickedCardId: Dispatch<SetStateAction<string>>
}
export type CardListCardProps = ServerCardProps & {
  id: string
}

const CardListCard = ({
  clicked,
  setClickedCardId,
  ...rest
}: CardListCardProps & CardClickProps) => {
  const dispatch = useCardDispatch()
  const onCardClick = useCallback(() => {
    if (!clicked) {
      setClickedCardId(rest.id)
      return
    }
    setClickedCardId('')
  }, [clicked, rest.id, setClickedCardId])

  const onCardDelete = useCallback(() => {
    dispatch({ type: 'DELETE', payload: { cardId: rest.id } })
  }, [dispatch, rest.id])

  return (
    <>
      <Styled.CardContainer onClick={onCardClick}>
        <Styled.CardOpacityContainer clicked={clicked}>
          <Card key={rest.id} {...rest} />
        </Styled.CardOpacityContainer>
        <Styled.CardClickedContainer clicked={clicked}>
          <Styled.CardClickButtonConatiner>
            <Styled.CardEditButton>수정</Styled.CardEditButton>
            <Styled.CardDeleteButton onClick={onCardDelete}>
              삭제
            </Styled.CardDeleteButton>
          </Styled.CardClickButtonConatiner>
        </Styled.CardClickedContainer>
      </Styled.CardContainer>
      <Styled.CardNameText>{rest.name}</Styled.CardNameText>
    </>
  )
}

export default CardListCard
