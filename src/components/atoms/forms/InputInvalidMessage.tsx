interface IProps {
  condition: boolean;
  message?: string;
}

export default function InputInvalidMessage({ condition, message }: IProps) {
  if (condition) {
    return null;
  }
  return <div>{message}</div>;
}
