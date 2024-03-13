type VStackProps = {
  children: React.ReactNode;
};

export default function VStack({ children }: VStackProps) {
  return <div className='flex-column-center'>{children}</div>;
}
