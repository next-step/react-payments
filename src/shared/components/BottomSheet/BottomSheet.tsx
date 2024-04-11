import { PropsWithChildren } from 'react';
import { Grid, StyleProps, styleToken, VStack } from '@/shared';

type ButtonSheetProps = PropsWithChildren<
  StyleProps & {
    _grid?: StyleProps;
  }
>;

export const BottomSheet = ({
  children,
  position = 'absolute',
  bottom = '0',
  left = '0',
  width = '100%',
  height = '230px',
  backgroundColor = 'white',
  zIndex = styleToken.zIndex.popover,
  _grid,
  ...props
}: ButtonSheetProps) => (
  <VStack
    position={position}
    bottom={bottom}
    left={left}
    width={width}
    height={height}
    backgroundColor={backgroundColor}
    zIndex={zIndex}
    {...props}
  >
    <Grid
      gridTemplateColumns="repeat(4, 1fr)"
      alignItems="center"
      justifyContent="center"
      height="100%"
      padding="20px"
      {..._grid}
    >
      {children}
    </Grid>
  </VStack>
);

BottomSheet.displayName = 'BottomSheet';
