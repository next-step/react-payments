import {
  CardCodeInput,
  CardExpDateInput,
  CardPinInput,
  CardNameInput,
  Flex,
  Text,
  Header,
  BaseInput,
} from '@/components'
import { FormEventHandler } from 'react'

// TODO
// [ ] 상태 연결, 다음 활성화 로직 구성 (다음 퍼널에서도 사용되어야 하므로 context로 폼 입력 상태를 정의해야 할듯)
// [ ] 상단에 카드 컴포넌트 표시, 상태랑 연결
// [ ] Funnel 연결 + 카드 등록 완료로 이동

export interface CardInputFormFunnelProps {
  onSubmit: () => void
}

export const CardInputFormFunnel = ({ onSubmit }: CardInputFormFunnelProps) => {
  const handleSubmit: FormEventHandler<HTMLFormElement> = e => {
    e.preventDefault()
    alert('제출!')
    onSubmit()
  }

  return (
    <Flex direction="column" width="100%" height="100vh">
      <Header title="카드 추가" prevNavPath="/card-list" />
      <Flex
        as="main"
        direction="column"
        height="100%"
        paddingX="24px"
        marginTop="48px"
        width="100%"
        onSubmit={handleSubmit}
      >
        <Flex id="card-register-form" as="form" direction="column" width="100%" gap="36px">
          <CardCodeInput id="card-code" label="카드 번호" width="100%" textAlign="center" />
          <CardExpDateInput id="card-exp-date" label="만료일" />
          <CardNameInput id="card-name" label="카드 소유자 이름(선택)" />
          <BaseInput
            id="card-cvc"
            label="보안 코드(CVC/CVV)"
            type="password"
            maxLength={3}
            width="100px"
            textAlign="center"
          />
          <CardPinInput id="card-pin" label="카드 비밀번호" />
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
