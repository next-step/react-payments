import { Input } from '../Input';

interface InputHeaderProps {
  title?: string;
  errorMessage?: string;
  hasError?: boolean;
}

export const InputHeader = ({
  title,
  errorMessage,
  hasError,
}: InputHeaderProps) => {
  return (
    <Input.Title>
      <span>{title}</span>
      {errorMessage && (
        <Input.Error errorMessage={errorMessage} hasError={hasError || false} />
      )}
    </Input.Title>
  );
};
