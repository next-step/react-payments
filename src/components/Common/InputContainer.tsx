import { cls } from '@/utils';
import { PropsWithChildren } from 'react';

type Size = 'full' | 'half' | 'quarter';

type InputContainerProps = {
  size?: Size;
  error?: boolean;
  disabled?: boolean;
};

function InputContainer({ children, size = 'full', disabled = false }: PropsWithChildren<InputContainerProps>) {
  const getWidth = (size: Size) => {
    switch (size) {
      case 'full':
        return 'w-full';
      case 'half':
        return 'w-1/2';
      case 'quarter':
        return 'w-1/4';
      default:
        return 'w-full';
    }
  };

  const width = getWidth(size);
  const bgStyle = disabled ? 'bg-white' : 'bg-gray-100';
  // const hasError = error ? 'bg-red-100' : '';

  return (
    <div className={cls(width, 'px-2  flex  justify-center items-center gap-1 rounded-lg my-1', bgStyle)}>
      {children}
    </div>
  );
}

export default InputContainer;
