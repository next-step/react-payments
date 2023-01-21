interface IProps {
  ownerLength: number;
  maxLength: number;
}

export default function CardOwnerLength({ ownerLength, maxLength }: IProps) {
  return (
    <span
      style={{
        position: "absolute",
        right: 0,
        top: "-20px",
        fontSize: "12px",
        color: "#525252",
      }}
    >
      {ownerLength} / {maxLength}
    </span>
  );
}
