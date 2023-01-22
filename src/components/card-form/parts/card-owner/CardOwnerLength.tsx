interface IProps {
  ownerLength: number;
  maxLength: number;
}

export default function CardOwnerLength({ ownerLength, maxLength }: IProps) {
  return (
    <span className="card-owner-length">
      {ownerLength} / {maxLength}
    </span>
  );
}
