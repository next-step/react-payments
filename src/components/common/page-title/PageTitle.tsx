import {type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren} from 'react';
import classNames from 'classnames';
type BasePageTitleProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
type PageTitleProps = {
  className?: string;
} & BasePageTitleProps & PropsWithChildren;
const PageTitle = ({className, children}: PageTitleProps) => <h2 className={classNames('page-title', className)}>{children}</h2>;

export default PageTitle;
