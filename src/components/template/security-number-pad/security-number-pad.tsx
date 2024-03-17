import { Box } from '@/components/atom/box'
import { Text } from '@/components/atom/text'
import { Flex } from '@/components/atom/flex'
import { BottomSheet, BottomSheetContentProps } from '@/components/molecule/bottom-sheet'
import * as styles from './security-number-pad.css'
import {
  DELETE,
  EMPTY,
  createSecurityNumberPadArray,
  type PadValue,
} from '@/utils/create-security-number-pad-array'
import { IconX, IconShieldLock } from '@tabler/icons-react'
import { vars } from '@/styles'
import { useRef } from 'react'

export interface SecurityNumberPadProps
  extends Omit<BottomSheetContentProps, 'onChange' | 'onInput'> {
  title: string
  defaultValue: string
  onInput: (value: string) => void
  onInputComplete: () => void
  maxLength: number
}

export const SecurityNumberPad = ({
  title,
  defaultValue,
  onClose,
  onInput,
  onInputComplete,
  maxLength,
}: SecurityNumberPadProps) => {
  const numberPadValueRef = useRef(defaultValue)

  const handleClickPad = (padValue: PadValue) => {
    if (padValue === EMPTY) return
    const prevNumberPadValue = numberPadValueRef.current
    numberPadValueRef.current =
      padValue === DELETE
        ? prevNumberPadValue.slice(0, -1)
        : (prevNumberPadValue + String(padValue)).slice(0, maxLength)
    onInput(numberPadValueRef.current)

    if (numberPadValueRef.current.length >= maxLength) {
      onInputComplete?.()
    }
  }

  return (
    <BottomSheet.Root>
      <BottomSheet.Dimmer />
      <BottomSheet.Content direction="column" paddingTop="36px" onClose={onClose}>
        <Text as="h2" variant="heading2" marginBottom="24px" textAlign="center">
          {title}
        </Text>
        <Box className={styles.padGrid}>
          {createSecurityNumberPadArray({
            numberPadCount: 10,
            totalPadCount: 15,
          }).map((securityPadValue, idx) => (
            <Flex
              key={idx}
              className={styles.pad}
              width="100%"
              padding="20px"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              onClick={() => handleClickPad(securityPadValue)}
            >
              {securityPadValue === EMPTY && <IconShieldLock color={vars.color.aqua} />}
              {securityPadValue === DELETE && <IconX color={vars.color.aqua} />}
              {typeof securityPadValue === 'number' && (
                <Text variant="title2" color="gray300">
                  {securityPadValue}
                </Text>
              )}
            </Flex>
          ))}
        </Box>
      </BottomSheet.Content>
    </BottomSheet.Root>
  )
}
