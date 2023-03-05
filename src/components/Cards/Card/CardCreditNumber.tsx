import { maskCreditNumbers } from 'src/utils/functions';

interface CardCreditNumberProps {
  creditNumber: string;
}

const CardCreditNumber = ({ creditNumber }: CardCreditNumberProps) => {
  const creditNumberList = maskCreditNumbers(creditNumber);

  return (
    <div className="card-credit-number">
      {creditNumberList?.map((creditNum, index) => (
        <div
          key={creditNum + index.toString()}
          className="card-credit-number-item"
        >
          {creditNum}
        </div>
      ))}
    </div>
  );
};

export default CardCreditNumber;
