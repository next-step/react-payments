import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';
type BasePageTitleProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
interface PageTitleProps extends BasePageTitleProps, PropsWithChildren {
  className?: string;
}
const PageTitle = ({ className, children }: PageTitleProps) => {
  return <h2 className={classNames('page-title', className)}>{children}</h2>;
};

export default PageTitle;
