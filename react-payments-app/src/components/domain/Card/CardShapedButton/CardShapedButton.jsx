const CardShapedButton = ({ onClick }) => {
  return (
    <div role='button' onClick={onClick} className='card-box'>
      <div className='empty-card'>+</div>
    </div>
  );
};

export default CardShapedButton;
