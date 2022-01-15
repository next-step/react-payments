type Props = {
  name: string;
  expireDate: string;
  company: string;
  cardNumber: string;
}
export default function Card({
  name, expireDate, company, cardNumber,
}: Props) {
  return (
    <div>
      {company && <div>{company}</div>}
      <div />
      {cardNumber && <div>{cardNumber}</div>}
      <div>
        <span>{name || 'NAME'}</span>
        <span>{expireDate || 'MM/YY'}</span>
      </div>
    </div>
  );
}
