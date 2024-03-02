import { Input, InputContentProps } from '@/components/molecule/input'
import { forwardRef } from 'react'
import { getLayoutProps, PolymorphicRef } from '@/types'
import * as styles from './underline-input.css'

export interface UnderlineInputProps extends Omit<InputContentProps, 'textAlign'> {
  /** input content 요소 정렬 */
  contentAlign?: InputContentProps['textAlign']
}

/**
 * 밑줄이 함께 있는 input 컴포넌트
 */
export const UnderlineInput = forwardRef(
  ({ contentAlign, ...props }: UnderlineInputProps, ref: PolymorphicRef<'input'>) => {
    const { layoutProps, ...contentProps } = getLayoutProps(props)
    return (
      <Input.Wrapper {...layoutProps}>
        <Input.Content
          ref={ref}
          className={styles.inputContent}
          textAlign={contentAlign}
          {...contentProps}
        />
      </Input.Wrapper>
    )
  },
)
