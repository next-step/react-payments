import { cls } from '@/utils';
import { PropsWithChildren } from 'react';

type Size = 'full' | 'half' | 'quarter';

type InputContainerProps = {
  size?: Size;
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

  return (
    <div className={cls(width, 'px-4 flex justify-center items-center gap-2  rounded-lg my-2', bgStyle)}>
      {children}
    </div>
  );
}

export default InputContainer;
