import ButtonBox from '../atoms/ButtonBox';
import ButtonText from '../atoms/ButtonText';

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

export default function Button({ className, children, ...rest }: ButtonProps) {
  return (
    <ButtonBox className={className}>
      <ButtonText {...rest}>{children}</ButtonText>
    </ButtonBox>
  );
}
