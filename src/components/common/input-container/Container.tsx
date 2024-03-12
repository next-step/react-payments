import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';

type BaseContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface ContainerProps extends BaseContainerProps, PropsWithChildren {
  title?: string;
  className?: string;
}

const Container = ({ title, className, children }: ContainerProps) => {
  return (
    <div className={classNames('input-container', className)}>
      {title && (
        <span title={title} className="input-title">
          {title}
        </span>
      )}
      {children}
    </div>
  );
};

export default Container;
