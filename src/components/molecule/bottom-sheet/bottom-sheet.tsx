import { Box, BoxProps, Flex, FlexProps } from '@/components'
import { clsx } from 'clsx'
import * as styles from './bottom-sheet.css'
import { useClickOutside } from '@/hooks'

/* -------------------------------------------------------------------------------------------------
 * BottomSheetRoot
 * -----------------------------------------------------------------------------------------------*/

export interface BottomSheetRootProps extends FlexProps {}

export const BottomSheetRoot = ({ className, ...props }: BottomSheetRootProps) => {
  return <Box className={clsx(styles.root, className)} {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * BottomSheetDimmer
 * -----------------------------------------------------------------------------------------------*/

export interface BottomSheetDimmerProps extends BoxProps {}

export const BottomSheetDimmer = ({ className, ...props }: BottomSheetDimmerProps) => {
  return <Box className={clsx(styles.dimmer, className)} {...props} />
}

/* -------------------------------------------------------------------------------------------------
 * BottomSheetContent
 * -----------------------------------------------------------------------------------------------*/
export interface BottomSheetContentProps extends FlexProps {
  onClose: () => void
}

export const BottomSheetContent = ({ className, onClose, ...props }: BottomSheetContentProps) => {
  const ref = useClickOutside<HTMLDivElement>({
    onClickOutside: onClose,
  })
  return <Flex className={clsx(className, styles.content)} ref={ref} {...props} />
}

export const BottomSheet = {
  Root: BottomSheetRoot,
  Dimmer: BottomSheetDimmer,
  Content: BottomSheetContent,
}
