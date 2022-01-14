import Header from '../../components/Layout/Header'
import Styled from './index.styled'

const CardSubmit = () => {
  return (
    <Styled.Container>
      <Styled.HeaderContainer>
        <Header title="카드등록이 완료되었습니다." />
      </Styled.HeaderContainer>
      <div>CardSubmit</div>
    </Styled.Container>
  )
}

export default CardSubmit
