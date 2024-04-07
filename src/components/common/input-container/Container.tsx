import classNames from 'classnames';
import type { HTMLAttributes, PropsWithChildren } from 'react';

type BaseContainerProps = HTMLAttributes<HTMLDivElement>;

type ContainerProps = {
  title?: string;
  className?: string;
} & PropsWithChildren<BaseContainerProps>;

export const Container = ({ title, className, children }: ContainerProps) => (
  <div className={classNames('input-container', className)}>
    {title ? (
      <span title={title} className="input-title">
        {title}
      </span>
    ) : null}
    {children}
  </div>
);
