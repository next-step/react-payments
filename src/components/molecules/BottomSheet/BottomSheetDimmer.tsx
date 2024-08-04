import { PropsWithChildren } from 'react';

export const BottomSheetDimmer = ({ children }: PropsWithChildren) => {
  return (
    <div className='modal-dimmed' onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
};
