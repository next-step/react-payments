import { type HTMLAttributes, type PropsWithChildren } from 'react';
import classNames from 'classnames';

type BasePageTitleProps = HTMLAttributes<HTMLDivElement>;

type PageTitleProps = {
  className?: string;
} & PropsWithChildren<BasePageTitleProps>;

export const PageTitle = ({ className, children }: PageTitleProps) => (
  <h2 className={classNames('page-title', className)}>{children}</h2>
);
