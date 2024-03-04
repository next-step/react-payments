import { Flex } from '@/components'
import { IconPlus } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

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
