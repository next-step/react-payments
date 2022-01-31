const AddCardBtn = ({ onClick }: NewCardProps) => {
  return (
    <div className="card-box">
      <div className="empty-card" onClick={onClick}>
        +
      </div>
    </div>
  );
};

export interface NewCardProps {
  onClick?: () => void;
}

export default AddCardBtn;
