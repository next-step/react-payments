import { Flex, Text } from '@/components'
import { vars } from '@/styles'
import { IconChevronLeft } from '@tabler/icons-react'

export interface HeaderProps {
  title: string
  onClickPrev?: () => void
}

export const Header = ({ title, onClickPrev }: HeaderProps) => {
  return (
    <Flex as="header" width="100%" paddingX="24px" paddingY="36px">
      <Flex alignItems="center" gap="12px" color="gray900">
        {onClickPrev && (
          <Flex as="button" onClick={onClickPrev}>
            <IconChevronLeft size={24} color={vars.color.gray900} />
          </Flex>
        )}
        <Text variant="body1" color="gray900">
          {title}
        </Text>
      </Flex>
    </Flex>
  )
}
