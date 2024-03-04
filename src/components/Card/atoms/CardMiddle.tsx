type CardMiddleProps = {
  children: React.ReactNode;
};

export default function CardMiddle({ children }: CardMiddleProps) {
  return <div className='card-middle'>{children}</div>;
}
