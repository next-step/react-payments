import { cls } from '@/utils';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

type ButtonKind = 'primary' | 'danger' | 'default';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: ButtonKind;
}

const getBgColor = (kind: ButtonKind) => {
  switch (kind) {
    case 'primary':
      return 'bg-blue-400';
    case 'danger':
      return 'bg-red-400';
    case 'default':
    default:
      return 'bg-zinc-400';
  }
};

function Button({
  children,
  type = 'button',
  disabled = false,
  kind = 'default',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const bgColor = getBgColor(kind);
  return (
    <button
      className={cls('w-full py-3 px-2  text-white font-bold rounded-xl', bgColor, 'disabled:bg-slate-300')}
      type={type}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
