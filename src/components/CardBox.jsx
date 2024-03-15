export default function CardBox({ children, ...props }) {
  return (
    <div className="card-box" {...props}>
      <div className="empty-card">{children}</div>
    </div>
  );
}
