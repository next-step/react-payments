import { Flex, Text } from '@/components'
import { IconChevronLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export interface HeaderProps {
  prevNavPath?: string
  title: string
}

export const Header = ({ title, prevNavPath }: HeaderProps) => {
  return (
    <Flex as="header" width="100%" paddingX="36px" paddingY="20px">
      <Flex alignItems="center" gap="12px">
        {prevNavPath && (
          <Link to={prevNavPath}>
            <IconChevronLeft size={24} />
          </Link>
        )}
        <Text variant="body1" color="gray900">
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
