import { useRef, cloneElement, Fragment, Children, PropsWithChildren, isValidElement } from 'react'
import { Box } from '@/components/atom/box'
import { useOverlay } from '@/hooks'
import { LayoutProps } from '@/types'
import * as styles from './tooltip.css'

export interface TooltipProps extends PropsWithChildren, LayoutProps {
  /** tooltip에서 표시할 label */
  label: string
  /** tooltip 으로부터의 x축 거리 (기본 8) */
  offsetX?: number
}

export const Tooltip = ({ children, label, offsetX = 8, ...props }: TooltipProps) => {
  const triggerRef = useRef<Element>(null)
  const [openOverlay, closeOverlay] = useOverlay()

  const handleOpenTooltipContent = () => {
    if (!triggerRef.current) return
    const domRect = triggerRef.current.getBoundingClientRect()
    const { right, top } = domRect
    openOverlay(
      <Box
        className={styles.content}
        backgroundColor="gray700"
        color="white"
        style={{
          top,
          left: right + offsetX,
        }}
      >
        {label}
      </Box>,
    )
  }

  return (
    <Box {...props}>
      {Children.toArray(children)
        .filter(isValidElement)
        .map((child, key) => (
          <Fragment key={key}>
            {cloneElement(child as JSX.Element, {
              ref: triggerRef,
              style: { cursor: 'pointer' },
              onClick: handleOpenTooltipContent,
              onMouseOut: closeOverlay,
            })}
          </Fragment>
        ))}
    </Box>
  )
}
