import { PropsWithChildren } from 'react';
import useOverlay from '@/hooks/useOverlay';
import { BottomSheetDimmer } from './BottomSheetDimmer';
import { BottomSheetContent } from './BottomSheetContent';

// eslint-disable-next-line react-refresh/only-export-components
const BottomSheetRoot = ({ children }: PropsWithChildren) => {
  const { close: closeBottomSheet } = useOverlay();

  return (
    <div className='modal' onClick={closeBottomSheet}>
      {children}
    </div>
  );
};

export const BottomSheet = {
  Root: BottomSheetRoot,
  Dimmer: BottomSheetDimmer,
  Content: BottomSheetContent,
};
