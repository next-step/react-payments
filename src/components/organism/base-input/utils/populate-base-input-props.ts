import { BaseInputProps } from '@/components/organism/base-input/base-input.tsx'
import { getLayoutProps } from '@/types'
import { isNil } from '@/utils'

export const getBaseInputProps = (props: BaseInputProps) => {
  const { layoutProps, ...otherBaseInputProps } = getLayoutProps(props)
  const { helperText, label, topOffset, bottomOffset, error, id, ...otherProps } =
    otherBaseInputProps

  const isHelperTextEnabled = !isNil(helperText)
  const isLabelEnabled = !isNil(label)
  const isTopSectionEnabled = isLabelEnabled || isHelperTextEnabled
  const isBottomSectionEnabled = !isNil(error)

  const inputContentTopMargin: BaseInputProps['topOffset'] = isTopSectionEnabled
    ? topOffset
    : 'none'
  const inputContentBottomMargin: BaseInputProps['bottomOffset'] = isBottomSectionEnabled
    ? bottomOffset
    : 'none'

  return {
    wrapperProps: layoutProps,
    baseInputTopSectionProps: {
      isTopSectionEnabled,
      isLabelEnabled,
      label,
      isHelperTextEnabled,
      helperText,
      htmlFor: id,
    },
    inputContentProps: {
      ...otherProps,
      id,
      marginTop: inputContentTopMargin,
      marginBottom: inputContentBottomMargin,
    },
  }
}
