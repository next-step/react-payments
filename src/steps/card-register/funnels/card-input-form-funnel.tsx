import {
  CardCodeInput,
  CardExpDateInput,
  CardPinInput,
  CardNameInput,
  Flex,
  Text,
  Header,
  BaseInput,
  Card,
} from '@/components'
import { FormEventHandler } from 'react'
import { useCardInputContext } from '@/steps/card-register/contexts/card-input-context'

export interface CardInputFormFunnelProps {
  onSubmit: () => void
}

export const CardInputFormFunnel = ({ onSubmit }: CardInputFormFunnelProps) => {
  const {
    cardInput: { cardCode, cardExpDate, cardName, cardCVC, cardPin },
    setCardInput,
  } = useCardInputContext()

  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    onSubmit()
  }

  return (
    <Flex direction="column" width="100%" height="100vh">
      <Header title="카드 추가" />
      <Flex
        as="main"
        direction="column"
        height="100%"
        paddingX="24px"
        marginTop="48px"
        width="100%"
        onSubmit={handleSubmit}
      >
        <Flex justifyContent="center" marginBottom="32px">
          <Card cardCode={cardCode} cardName={cardName} cardExpDate={cardExpDate} />
        </Flex>
        <Flex id="card-register-form" as="form" direction="column" width="100%" gap="36px">
          <CardCodeInput
            id="card-code"
            label="카드 번호"
            width="100%"
            textAlign="center"
            value={cardCode}
            onChange={setCardInput('cardCode')}
          />
          <CardExpDateInput
            id="card-exp-date"
            label="만료일"
            value={cardExpDate}
            onChange={setCardInput('cardExpDate')}
          />
          <CardNameInput
            id="card-name"
            label="카드 소유자 이름(선택)"
            value={cardName}
            onChange={setCardInput('cardName')}
          />
          <BaseInput
            id="card-cvc"
            label="보안 코드(CVC/CVV)"
            type="password"
            maxLength={3}
            width="100px"
            textAlign="center"
            value={cardCVC}
            onChange={e => setCardInput('cardCVC')(e.target.value)}
          />
          <CardPinInput
            id="card-pin"
            label="카드 비밀번호"
            value={cardPin}
            onChange={setCardInput('cardPin')}
          />
        </Flex>
        <Flex justifyContent="flex-end" paddingX="24px" paddingY="32px" marginTop="auto">
          <Text as="button" type="submit" variant="body1" color="aqua" form="card-register-form">
            다음
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
