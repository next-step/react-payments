import { Flex, Header } from '@/components'
import { IconPlus } from '@tabler/icons-react'

export interface CardListStepProps {
  onClickRegister: () => void
}

export const CardListStep = ({ onClickRegister }: CardListStepProps) => {
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
        <Flex
          as="button"
          width="100%"
          borderRadius="4px"
          backgroundColor="gray100"
          color="gray500"
          justifyContent="center"
          alignItems="center"
          aspectRatio="2/1"
          onClick={onClickRegister}
        >
          <IconPlus size={24} />
        </Flex>
      </Flex>
    </Flex>
  )
}
