interface InputErrorMessageProps {
  errorMessage?: string;
}

export default function InputErrorMessage({
  errorMessage,
}: InputErrorMessageProps) {
  if (!errorMessage) return;

  return <span className='input-error'>{errorMessage}</span>;
}
