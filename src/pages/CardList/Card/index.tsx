import { Dispatch, SetStateAction, useCallback } from 'react'
import Card from '../../../components/Card'
import { ServerCardProps } from '../../../context/Card/CardContext'
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
  const onCardClick = useCallback(() => {
    if (!clicked) {
      setClickedCardId(rest.id)
      return
    }
    setClickedCardId('')
  }, [clicked, rest.id, setClickedCardId])

  return (
    <>
      <Styled.CardContainer onClick={onCardClick}>
        <Styled.CardOpacityContainer clicked={clicked}>
          <Card key={rest.id} {...rest} />
        </Styled.CardOpacityContainer>
        <Styled.CardClickedContainer clicked={clicked}>
          <Styled.CardClickButtonConatiner>
            <Styled.CardEditButton>수정</Styled.CardEditButton>
            <Styled.CardDeleteButton>삭제</Styled.CardDeleteButton>
          </Styled.CardClickButtonConatiner>
        </Styled.CardClickedContainer>
      </Styled.CardContainer>
      <Styled.CardNameText>{rest.name}</Styled.CardNameText>
    </>
  )
}

export default CardListCard
