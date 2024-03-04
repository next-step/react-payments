type CardTopProps = {
  children?: React.ReactNode;
};

export default function CardTop({ children }: CardTopProps) {
  return <div className='card-top'>{children}</div>;
}
