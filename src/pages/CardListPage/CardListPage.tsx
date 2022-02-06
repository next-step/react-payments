import { Fragment } from 'react'
import { useAppContext } from 'App'
import { useNavigate } from 'react-router-dom'
import { Card, DigitalCard } from 'components/Card'
import * as S from './style'

export default function CardListPage() {
  const { cards, setCards, setEditCardIndex } = useAppContext()
  const navigate = useNavigate()
  const handleClick = (index: number) => () => {
    setEditCardIndex(index)
    navigate('/add-complete')
  }
  const handleDeleteClick = (index: number) => () => {
    setCards(cards.filter((card, i) => cards.length - 1 - i !== index))
  }
  return (
    <S.Box>
      <S.Header>보유카드</S.Header>
      <S.Main>
        {[...cards].reverse().map(({ nickName, id, ...card }, i) => (
          <Fragment key={`${id}`}>
            <S.Wrapper>
              <S.DigitalCardBlock onClick={handleClick(cards.length - 1 - i)}>
                <DigitalCard {...card} />
                <S.Name>{nickName}</S.Name>
              </S.DigitalCardBlock>
              <S.Delete onClick={handleDeleteClick(i)}>-</S.Delete>
            </S.Wrapper>
          </Fragment>
        ))}
        <Card onClick={() => navigate('add')}>
          <S.AddCard>+</S.AddCard>
        </Card>
      </S.Main>
    </S.Box>
  )
}
