interface EmptyCardProps {
  onClick: () => void;
}

const EmptyCard = ({ onClick }: EmptyCardProps) => (
  <div className="card-container">
    <div className="card" onClick={onClick}>
      <div className="new-card">+</div>
    </div>
  </div>
);

export default EmptyCard;
