import { Flex, Header } from '@/components'
import { IconPlus } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export const CardListPage = () => {
  return (
    <Flex direction="column" height="100vh" alignItems="center" justifyContent="center">
      <Header title="보유카드" />
      <Flex width="60vw" height="100%" direction="column" gap="24px" justifyContent="center">
        <CardRegisterButton />
      </Flex>
    </Flex>
  )
}

export const CardRegisterButton = () => {
  return (
    <Link to="/card-register">
      <Flex
        width="100%"
        borderRadius="4px"
        backgroundColor="gray100"
        color="gray500"
        justifyContent="center"
        alignItems="center"
        aspectRatio="2/1"
      >
        <IconPlus size={24} />
      </Flex>
    </Link>
  )
}
