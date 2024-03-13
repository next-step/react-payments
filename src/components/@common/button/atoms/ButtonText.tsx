type ButtonTextProps = {
  children: React.ReactNode;
};

export default function ButtonText({ children, ...rest }: ButtonTextProps) {
  return (
    <button className='button-text' {...rest}>
      {children}
    </button>
  );
}
