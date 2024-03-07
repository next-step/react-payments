import { Card, Flex, Text, UnderlineInput } from '@/components'
import { useCardInputContext } from '@/steps/card-register/contexts/card-input-context'

export interface CardRegisterCompleteStepProps {
  onClickConfirm: () => void
}

export const CardRegisterCompleteStep = ({ onClickConfirm }: CardRegisterCompleteStepProps) => {
  const { cardInput } = useCardInputContext()

  return (
    <Flex width="100%" height="100vh" direction="column">
      <Flex direction="column" justifyContent="center" alignItems="center" marginTop="48px">
        <Text as="h1" variant="heading1" marginBottom="48px">
          카드등록이 완료되었습니다.
        </Text>
        <Card cardSize="lg" {...cardInput} marginBottom="24px" />
        <UnderlineInput width="240px" placeholder="카드 별명" contentAlign="center" />
      </Flex>

      <Flex justifyContent="flex-end" paddingX="24px" paddingY="32px" marginTop="auto">
        <Text as="button" variant="body1" color="aqua" onClick={onClickConfirm}>
          확인
        </Text>
      </Flex>
    </Flex>
  )
}
