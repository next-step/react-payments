import InputContainer from '../atoms/InputContainer';
import InputTitle from '../atoms/InputTitle';

type FormControlProps = {
  label: string;
  children: React.ReactNode;
};

export default function FormControl({ label, children }: FormControlProps) {
  return (
    <InputContainer>
      <InputTitle>{label}</InputTitle>
      {children}
    </InputContainer>
  );
}
