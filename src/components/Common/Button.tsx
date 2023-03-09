import { cls } from '@/utils';
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';

const buttonBackgroundColorMap = {
  primary: 'bg-blue-400',
  danger: 'bg-red-400',
  default: 'bg-zinc-400',
};

type ButtonKind = keyof typeof buttonBackgroundColorMap;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: ButtonKind;
}

const DEFAULT_BUTTON_BACKGROUND_COLOR = 'bg-zinc-400';

function Button({
  children,
  type = 'button',
  disabled = false,
  kind = 'default',
  ...props
}: PropsWithChildren<ButtonProps>) {
  const bgColor = buttonBackgroundColorMap[kind] ?? DEFAULT_BUTTON_BACKGROUND_COLOR;

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
