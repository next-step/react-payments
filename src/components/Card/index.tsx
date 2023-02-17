interface Props {
  isEmpty?: boolean;
}

const NewCard = () => <div className="new-card">+</div>;

const Card = (props: Props) => {
  const { isEmpty } = props;
  return (
    <div className="card-container">
      <NewCard />
    </div>
  );
};

Card.defaultProps = {
  isEmpty: false,
};

export default Card;
