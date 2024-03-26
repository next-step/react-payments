import { BottomSheet, BottomSheetContentProps } from '@/components/molecule/bottom-sheet'
import * as styles from './card-type-pick-bottom-sheet.css'
import { Text, Flex, FlexProps, FlexElements } from '@/components'
import { CardType } from '@/types/card'
import { IconCheck } from '@tabler/icons-react'
import { vars } from '@/styles'

export interface CardTypePickBottomSheetProps {
  onClose: BottomSheetContentProps['onClose']
  cardTypeList: CardType[]
  selectedCardType?: CardType
  onSelectCardType: (value: CardType) => void
}

export const CardTypePickBottomSheet = ({
  cardTypeList,
  onClose,
  selectedCardType,
  onSelectCardType,
}: CardTypePickBottomSheetProps) => {
  const handleClickCardTypeItem = (cardType: CardType) => () => {
    onSelectCardType?.(cardType)
    onClose()
  }

  return (
    <BottomSheet.Root>
      <BottomSheet.Dimmer />
      <BottomSheet.Content className={styles.content} onClose={onClose}>
        {cardTypeList.map(cardType => {
          const { id, brandName: name, color } = cardType
          return (
            <CardTypeItem
              as="button"
              key={id}
              name={name}
              isSelectedCardType={selectedCardType?.id === id}
              cardTypeColor={color}
              onClick={handleClickCardTypeItem(cardType)}
            />
          )
        })}
      </BottomSheet.Content>
    </BottomSheet.Root>
  )
}

export type CardTypeItemProps<C extends FlexElements> = FlexProps<C> & {
  name: string
  isSelectedCardType?: boolean
  cardTypeColor: FlexProps['backgroundColor']
}

export const CardTypeItem = <C extends FlexElements = 'div'>({
  as,
  name,
  isSelectedCardType = false,
  cardTypeColor,
  ...props
}: CardTypeItemProps<C>) => {
  return (
    <Flex as={as} direction="column" gap="10px" cursor="pointer" alignItems="center" {...props}>
      <Flex
        width="40px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        borderRadius="circle"
        backgroundColor={cardTypeColor}
      >
        {isSelectedCardType ? <IconCheck color={vars.color.white} /> : null}
      </Flex>
      <Text variant="body3">{name}</Text>
    </Flex>
  )
}
