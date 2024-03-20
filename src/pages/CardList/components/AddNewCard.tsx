interface Props {
  onNext: () => void;
}

const AddNewCard = ({ onNext }: Props) => {
  return (
    <div className='card-box'>
      <div className='empty-card' onClick={onNext}>
        +
      </div>
    </div>
  );
};

export default AddNewCard;
