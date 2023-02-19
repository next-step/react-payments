import { ElementType, PropsWithChildren } from 'react';

type InputBoxProps<T extends ElementType> = {
  as?: T;
  title?: string;
  subTitle?: string;
  className: string;
};

export default function Box<T extends React.ElementType = 'div'>({
  as,
  title,
  subTitle,
  className,
  children,
}: PropsWithChildren<InputBoxProps<T>>) {
  const Element = as || 'div';

  return (
    <Element className={className}>
      <div className="flex-between">
        {title && <span className="input-title">{title}</span>}
        {subTitle && <span className="input-title">{subTitle}</span>}
      </div>
      {children}
    </Element>
  );
}
