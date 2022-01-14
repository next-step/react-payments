const CardList = ({ card }) => {
  const { name, number, owner, expiryDate, nickname } = card;

  return (
    <li>
      <div>
        <p>{name}</p>
        <p>{number}</p>
        <p>
          <span>{owner}</span>
          <span>{expiryDate}</span>
        </p>
      </div>
      <h2>{nickname}</h2>
    </li>
  );
};

export default CardList;
