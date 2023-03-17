interface ErrorMessageProps {
  msg?: string;
}
function ErrorMessage({ msg }: ErrorMessageProps) {
  return <span className="font-medium text-xs text-red-400 mt-1">{msg || ''}</span>;
}

export default ErrorMessage;
