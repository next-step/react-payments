export default function CardBox({ children }) {
  return (
    <div className="card-box">
      <div className="empty-card">{children}</div>
    </div>
  );
}
