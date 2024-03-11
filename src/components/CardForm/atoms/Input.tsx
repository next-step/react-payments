import InputBasic from './InputBasic';
import InputBox from './InputBox';
import InputContainer from './InputContainer';
import InputTitle from './InputTitle';
import InputUnderLine from './InputUnderLine';

type FieldProps = {
  name?: string;
  value?: unknown;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

type InputProps = React.InputHTMLAttributes<HTMLInputElement> &
  FieldProps & {
    className?: string;
  };

const InputFactory = ({ className, ...rest }: InputProps) => {
  return <InputBasic className={className} {...rest} />;
};

export const Input = Object.assign(InputFactory, {
  Container: InputContainer,
  Title: InputTitle,
  Box: InputBox,
  Underline: InputUnderLine,
});
