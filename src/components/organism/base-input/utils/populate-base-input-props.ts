import { BaseInputProps } from '@/components/organism/base-input/base-input.tsx'
import { getLayoutProps } from '@/types'
import { isNil } from '@/utils'

export const populateBaseInputProps = (props: BaseInputProps) => {
  const { layoutProps, className, ...otherBaseInputProps } = getLayoutProps(props)
  const {
    helperText,
    label,
    topOffset = '4px',
    bottomOffset = '4px',
    error,
    id,
    ...otherInputContentProps
  } = otherBaseInputProps

  const isHelperTextEnabled = !isNil(helperText)
  const isLabelEnabled = !isNil(label)
  const isTopSectionEnabled = isLabelEnabled || isHelperTextEnabled
  const isBottomSectionEnabled = !isNil(error)

  const inputContentTopMargin = isTopSectionEnabled ? topOffset : 'none'
  const inputContentBottomMargin = isBottomSectionEnabled ? bottomOffset : 'none'

  return {
    wrapperProps: { ...layoutProps, className },
    baseInputTopSectionProps: {
      isTopSectionEnabled,
      isLabelEnabled,
      label,
      isHelperTextEnabled,
      helperText,
      htmlFor: id,
    },
    contentProps: {
      ...otherInputContentProps,
      id,
      marginTop: inputContentTopMargin,
      marginBottom: inputContentBottomMargin,
    },
    error,
  }
}
