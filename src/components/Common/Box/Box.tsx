import { PropsWithChildren } from 'react';

type InputBoxProps = {
  title?: string;
  subTitle?: string;
  className: string;
};

export default function Box({ title, subTitle, className, children }: PropsWithChildren<InputBoxProps>) {
  return (
    <div className={className}>
      <div className="flex-between">
        {title && <span className="input-title">{title}</span>}
        {subTitle && <span className="input-title">{subTitle}</span>}
      </div>
      {children}
    </div>
  );
}
