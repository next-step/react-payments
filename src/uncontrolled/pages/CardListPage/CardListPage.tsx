import { Card } from 'controlled/components/Card'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

export default function CardListPage() {
  const navigate = useNavigate()
  const handleDigitalCardClick = () => {
    navigate('/uncontrolled/add')
  }
  return (
    <Box>
      <header>보유카드</header>
      <Main>
        <Card onClick={handleDigitalCardClick}>
          <AddButton>+</AddButton>
        </Card>
      </Main>
    </Box>
  )
}

const Box = styled.div`
  padding: 20px 16px;
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px 0;
`

const AddButton = styled.button`
  display: block;
  width: 100%;
  font-size: 28px;
  border: none;
  min-height: 130px;
  color: #575757;
`
