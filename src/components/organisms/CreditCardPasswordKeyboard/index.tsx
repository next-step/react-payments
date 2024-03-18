import { Box, Button } from '@/components/atoms';
import BottomSheet from '@/components/molecules/BottomSheet';
import { forwardRef } from 'react';

interface Props {
  onClick: (value: string) => void;
  onDelete: () => void;
}

const numPads = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] as const;

const CreditCardPasswordKeyboard = forwardRef<HTMLDivElement, Props>(({ onClick, onDelete }, ref) => {
  return (
    <BottomSheet ref={ref}>
      <Box className="grid grid-cols-4 gap-3">
        {numPads.map((num) => (
          <Button onClick={() => onClick(num.toString())} key={num} className="justify-self-center">
            {num}
          </Button>
        ))}
        <Button onClick={onDelete} className="justify-self-center">
          backspace
        </Button>
      </Box>
    </BottomSheet>
  );
});

export default CreditCardPasswordKeyboard;
