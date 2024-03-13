type CardBoxProps = {
  children: React.ReactNode;
};

export default function CardBox({ children }: CardBoxProps) {
  return <div className='card-box'>{children}</div>;
}
