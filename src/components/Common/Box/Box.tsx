import { PropsWithChildren } from 'react';

type InputBoxProps = {
  title?: string;
  className: string;
};

export default function Box({ title, className, children }: PropsWithChildren<InputBoxProps>) {
  return (
    <div className={className}>
      {title && <span className="input-title">{title}</span>}
      {children}
    </div>
  );
}
