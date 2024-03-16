import { BottomSheet, BottomSheetContentProps } from '@/components/molecule/bottom-sheet'
import * as styles from './card-type-picker.css'
import { Text, Flex, FlexProps } from '@/components'
import { CardType } from '@/types/card'
import { IconCheck } from '@tabler/icons-react'
import { vars } from '@/styles'

export interface CardTypePickerProps {
  onClose: BottomSheetContentProps['onClose']
  cardTypeList: CardType[]
  selectedCardType?: CardType
  onSelectCardType: (value: CardType) => void
}

export const CardTypePicker = ({
  cardTypeList,
  onClose,
  selectedCardType,
  onSelectCardType,
}: CardTypePickerProps) => {
  const handleClickCardTypeItem = (cardType: CardType) => () => {
    onSelectCardType?.(cardType)
    onClose()
  }

  return (
    <BottomSheet.Root>
      <BottomSheet.Dimmer />
      <BottomSheet.Content className={styles.content} onClose={onClose}>
        {cardTypeList.map(({ id, name, color }, idx) => (
          <CardTypeItem
            key={id}
            name={name}
            isSelectedCardType={selectedCardType?.id === id}
            cardTypeColor={color}
            onClick={handleClickCardTypeItem(cardTypeList[idx])}
          />
        ))}
      </BottomSheet.Content>
    </BottomSheet.Root>
  )
}

export interface CardTypeItemProps extends FlexProps {
  name: string
  isSelectedCardType?: boolean
  cardTypeColor: FlexProps['backgroundColor']
}

export const CardTypeItem = ({
  name,
  isSelectedCardType = false,
  cardTypeColor,
  ...props
}: CardTypeItemProps) => {
  return (
    <Flex direction="column" gap="10px" cursor="pointer" alignItems="center" {...props}>
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
