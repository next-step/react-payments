import { DetailedHTMLProps, HTMLAttributes, PropsWithChildren } from 'react';
import classNames from 'classnames';

type BaseInputProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

interface Props extends BaseInputProps {
  label?: string;
}

const InputContainer = ({
  label,
  className,
  children,
  ...props
}: PropsWithChildren<Props>) => {
  return (
    <div className={classNames('input-container', className)} {...props}>
      {label && <span className='input-title'>{label}</span>}
      {children}
    </div>
  );
};

export default InputContainer;
