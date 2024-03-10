import { Input, InputContentProps } from '@/components/molecule/input'
import { forwardRef, ReactElement } from 'react'
import { AtomicProps, getLayoutProps, PolymorphicRef } from '@/types'
import * as styles from './underline-input.css'

export interface UnderlineInputProps extends Omit<InputContentProps, 'textAlign'> {
  /** input content 요소 정렬 */
  contentAlign?: InputContentProps['textAlign']
  /** 표시하고자 하는 에러 메시지  */
  error?: string
  /** 에러 요소 커스텀 렌더 함수 */
  errorRender?: (error: string) => ReactElement
  bottomOffset?: AtomicProps['marginBottom']
}

/**
 * 밑줄이 함께 있는 input 컴포넌트
 */
export const UnderlineInput = forwardRef(
  (
    { contentAlign, bottomOffset = '4px', error, errorRender, ...props }: UnderlineInputProps,
    ref: PolymorphicRef<'input'>,
  ) => {
    const { layoutProps, ...contentProps } = getLayoutProps(props)
    const contentMarginBottom = error ? bottomOffset : 'none'

    return (
      <Input.Wrapper {...layoutProps}>
        <Input.Content
          ref={ref}
          className={styles.inputContent}
          textAlign={contentAlign}
          marginBottom={contentMarginBottom}
          {...contentProps}
        />
        <Input.Error error={error} errorRender={errorRender} />
      </Input.Wrapper>
    )
  },
)
