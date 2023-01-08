import type { FunctionComponent, InputHTMLAttributes } from 'react';
import type { ChildrenProps } from 'components';

export type InputContainerProps = ChildrenProps & { title?: string };

export type InputBoxProps = ChildrenProps & {
  className?: string;
  error?: boolean;
  errorMessage?: string;
};

export type InputProps<T = ChildrenProps> = FunctionComponent<
  InputHTMLAttributes<HTMLInputElement & T>
>;
