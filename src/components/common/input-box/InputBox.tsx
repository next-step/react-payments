import { DetailedHTMLProps, HTMLAttributes } from 'react';

type BaseInputBoxProps = DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

interface InputBoxProps extends BaseInputBoxProps {}

const InputBox = ({ className, children, ...props }: InputBoxProps) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

export default InputBox;
