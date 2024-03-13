import { Box } from '@/components/atoms';
import { PropsWithChildren, forwardRef } from 'react';

interface Props extends PropsWithChildren {
  fullHeight?: boolean;
}

export default forwardRef<HTMLDivElement, Props>(function BottomSheet({ children, fullHeight }, ref) {
  return (
    <Box className="absolute inset-0 flex items-end justify-center bg-black bg-opacity-60">
      <Box
        className={`flex flex-col p-[23px] bg-white rounded-t-[29px] w-full ${fullHeight ? 'min-h-full' : 'h-fit'}`}
        ref={ref}
      >
        {children}
      </Box>
    </Box>
  );
});
