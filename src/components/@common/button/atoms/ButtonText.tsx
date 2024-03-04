type ButtonTextProps = {
  children: React.ReactNode;
};

export default function ButtonText({ children }: ButtonTextProps) {
  return <span className='button-text'>{children}</span>;
}
