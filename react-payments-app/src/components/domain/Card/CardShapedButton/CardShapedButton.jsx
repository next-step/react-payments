const CardShapedButton = ({ onClick }) => {
  return (
    <div role='button' onClick={onClick} className='card-box cursor-pointer'>
      <div className='empty-card'>+</div>
    </div>
  );
};

export default CardShapedButton;
