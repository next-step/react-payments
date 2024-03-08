type CardBoxProps = {
  children?: React.ReactNode | string;
};

export default function CardBox({ children }: CardBoxProps) {
  return (
    <div className="card-box">
      <div className="empty-card">{children}</div>
    </div>
  );
}
