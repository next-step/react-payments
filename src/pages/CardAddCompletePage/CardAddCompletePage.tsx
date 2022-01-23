import { Button } from 'components/Button'
import { DigitalCard } from 'components/Card'
import { Label } from 'components/Form/Input'
import styled from 'styled-components'

interface Props {
  setPage: React.Dispatch<React.SetStateAction<string>>
}

export default function CardAddCompletePage(props: Props) {
  return (
    <Main>
      <Section>
        <Title>카드 등록이 완료되었습니다</Title>
        {/* <DigitalCard big name="" serialNums="" userName="" expiredDate="" /> */}
        <Label id="userName">
          <Input name="userName" id="userName" type="text" maxLength={30} required />
        </Label>
        <ButtonWrapper>
          <Button>확인</Button>
        </ButtonWrapper>
      </Section>
    </Main>
  )
}

const Main = styled.main`
  height: 100%;
`

const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction column;
  height: 100%;
  align-items: center;
`

const Title = styled.p`
  margin: 96px 0 48px;
`

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #000;
  padding: 5px 10px;
  outline: none;
`

const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 16px;
  right: 25px;
`
