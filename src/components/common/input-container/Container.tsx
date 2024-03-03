import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

type BaseContainerProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface ContainerProps extends BaseContainerProps {
  title: string;
  children: ReactNode;
}

const Container = ({ title, children }: ContainerProps) => {
  return (
    <div className={`input-container`}>
      <span title={title} className="input-title">
        {title}
      </span>
      {children}
    </div>
  );
};

export default Container;
