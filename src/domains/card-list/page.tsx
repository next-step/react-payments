import { Flex, Header } from '@/components'
import { CardRegisterButton } from '@/domains/card-list/components/card-register-button'

export const CardListPage = () => {
  return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center">
      <Header title="보유카드" />
      <Flex
        as="main"
        width="60vw"
        height="100%"
        direction="column"
        gap="24px"
        justifyContent="center"
      >
        <CardRegisterButton />
      </Flex>
    </Flex>
  )
}
