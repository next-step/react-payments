type InputTitleProps = {
  children: React.ReactNode;
};

export default function InputTitle({ children }: InputTitleProps) {
  return <span className='input-title'>{children}</span>;
}
