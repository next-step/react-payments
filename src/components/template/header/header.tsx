import { Flex, Text } from '@/components'
import { vars } from '@/styles'
import { IconChevronLeft } from '@tabler/icons-react'
import { Link } from 'react-router-dom'

export interface HeaderProps {
  prevNavPath?: string
  title: string
}

export const Header = ({ title, prevNavPath }: HeaderProps) => {
  return (
    <Flex as="header" width="100%" paddingX="24px" paddingY="36px">
      <Flex alignItems="center" gap="12px" color="gray900">
        {prevNavPath && (
          <Link to={prevNavPath}>
            <IconChevronLeft size={24} color={vars.color.gray900} />
          </Link>
        )}
        <Text variant="body1" color="gray900">
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
