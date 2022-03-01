import { useNavigate } from 'react-router-dom'
import { Button } from 'controlled/components/Button'
import { DigitalCard } from 'controlled/components/Card'
import { Label } from 'controlled/components/Form/Input'
import { useInput } from 'controlled/hooks/useInput'
import { updateCardNickName } from './helpers'
import * as S from './style'
import { useAppContext } from 'controlled/App'

export default function CardAddCompletePage() {
  const navigate = useNavigate()
  const { cards, setCards, editCardIndex } = useAppContext()
  const [nickName, setNickName] = useInput(cards[editCardIndex].nickName)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setCards(updateCardNickName(cards, nickName))
    navigate('/')
  }

  return (
    <S.Main>
      <S.Section>
        <S.Title>카드 등록이 완료되었습니다</S.Title>
        <S.Form onSubmit={handleSubmit}>
          <DigitalCard big {...cards[editCardIndex]} />
          <Label id="nickName">
            <S.Input {...NICKNAME_PROPERTYS} value={nickName} onChange={setNickName} />
          </Label>
          <S.ButtonBlock>
            <Button type="submit">확인</Button>
          </S.ButtonBlock>
        </S.Form>
      </S.Section>
    </S.Main>
  )
}

const NICKNAME_PROPERTYS = {
  id: 'nickName',
  name: 'nickName',
  type: 'text',
  maxLength: 10,
}
