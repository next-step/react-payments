import { PropsWithChildren, useContext } from 'react';
import { ModalContext } from 'src/contexts/ModalContext';

interface BottomSheetProps extends PropsWithChildren {
  isBackgroundToggle?: boolean;
}

const BottomSheet = ({ children, isBackgroundToggle }: BottomSheetProps) => {
  const { isOpen, handleOpen } = useContext(ModalContext);

  const onBackgroundClick = () => {
    if (isBackgroundToggle) {
      handleOpen(false);
    }
  };

  return (
    <>
      <div
        className={`bottom-sheet-background ${isOpen ? 'open' : ''}`}
        onClick={onBackgroundClick}
      />
      <div className={`bottom-sheet-container ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </>
  );
};

BottomSheet.defaultProps = {
  isBackgroundToggle: false,
};

export default BottomSheet;
