import classNames from 'classnames';
import {type DetailedHTMLProps, type HTMLAttributes, type PropsWithChildren} from 'react';

type BaseContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

type ContainerProps = {
  title?: string;
  className?: string;
} & BaseContainerProps & PropsWithChildren;

const Container = ({title, className, children}: ContainerProps) => (
  <div className={classNames('input-container', className)}>
    {title ? (
      <span title={title} className='input-title'>
        {title}
      </span>
    ) : null}
    {children}
  </div>
);

export default Container;
