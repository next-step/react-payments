import { Flex, FlexProps } from '@/components/atom/flex'
import { Text } from '@/components/atom/text'
import * as styles from './card.css'
import { createDisplayCardCode } from '@/utils/create-display-card-code'
import { CardType } from '@/constants/card-type.ts'

export interface CardProps extends FlexProps {
  cardSize?: styles.Size
  cardCode: string
  cardName: string
  cardExpDate: string
  cardType?: CardType
}

export const Card = ({
  cardType,
  cardSize = 'md',
  cardCode,
  cardName,
  cardExpDate,
  ...flexProps
}: CardProps) => {
  const displayCardName = cardName.length === 0 ? 'NAME' : cardName
  const displayCardExpDate = cardExpDate.length === 0 ? 'MM/YY' : cardExpDate
  const displayCardCode =
    cardCode.length === 0 ? '\n' : createDisplayCardCode({ value: cardCode, separator: ' ' })

  const displayCardBackgroundColor = cardType?.color ?? 'gray100'

  return (
    <Flex
      direction="column"
      className={styles.CardContainer({ size: cardSize })}
      backgroundColor={displayCardBackgroundColor}
      {...flexProps}
    >
      <Flex alignItems="center" className={styles.CardHeader({ size: cardSize })}>
        <Text variant="body3">{cardType?.name}&nbsp;</Text>
      </Flex>
      <Flex
        className={styles.CardBody({ size: cardSize })}
        backgroundColor="gold"
        borderRadius="4px"
      />
      <Flex direction="column" className={styles.CardFooter({ size: cardSize })}>
        <Text>{displayCardCode}&nbsp;</Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text>{displayCardName}</Text>
          <Text>{displayCardExpDate}</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
