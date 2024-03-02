import { Input, InputContentProps } from '@/components/molecules/input'
import { Flex } from '@/components/atom/flex'
import { ReactNode } from 'react'
import { isNil } from '@/utils'
import { AtomicProps } from '@/types'
import { Text } from '@/components'

export interface BaseInputProps extends InputContentProps {
  label?: string
  helperText?: string
  error?: ReactNode
  topOffset?: AtomicProps['marginBottom']
  bottomOffset?: AtomicProps['marginTop']
}

export const BaseInput = ({
  label,
  helperText,
  error,
  topOffset = '4px',
  bottomOffset = '4px',
  ...rest
}: BaseInputProps) => {
  const isHelperTextEnabled = !isNil(helperText)
  const isLabelEnabled = !isNil(label)
  const isBottomSectionEnabled = !isNil(error)
  const isTopSectionEnabled = isLabelEnabled || isHelperTextEnabled

  return (
    <Input.Wrapper>
      {isTopSectionEnabled && (
        <Flex justifyContent="space-between" alignItems="center" marginBottom={topOffset}>
          {isLabelEnabled && (
            <Input.Label variant="body3" color="gray300">
              {label}
            </Input.Label>
          )}
          {isHelperTextEnabled && (
            <Text variant="body3" color="gray300">
              {helperText}
            </Text>
          )}
        </Flex>
      )}
      <Input.Content />
      {error}
    </Input.Wrapper>
  )
}
