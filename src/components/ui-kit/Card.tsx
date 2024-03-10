interface CardProps {
  variant: "empty-card" | "small-card" | "big-card";
  children: React.ReactNode;
}

export default function Card({ variant, children }: CardProps) {
  return (
    <div className="card-box">
      <div className={variant}>{children}</div>
    </div>
  );
}
