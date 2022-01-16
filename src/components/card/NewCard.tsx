const NewCard = ({ onClick }: NewCardProps) => {
  return (
    <div className="card-box" onClick={() => onClick?.call(null)}>
      <div className="empty-card">+</div>
    </div>
  );
};

export interface NewCardProps {
  onClick?: () => void;
}

export default NewCard;
