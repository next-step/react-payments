interface CardCreditNumberProps {
  creditNumber: string;
}

const CardCreditNumber = ({ creditNumber }: CardCreditNumberProps) => {
  const creditNumberList = creditNumber?.split('-');

  return (
    <div className="card-credit-number">
      {creditNumberList?.map((creditNum, index) => (
        <div
          key={creditNum + index.toString()}
          className="card-credit-number-item"
        >
          {index < 2 ? creditNum : creditNum.replace(/\d/g, '*')}
        </div>
      ))}
    </div>
  );
};

export default CardCreditNumber;
