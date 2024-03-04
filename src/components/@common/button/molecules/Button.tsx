import ButtonBox from '../atoms/ButtonBox';
import ButtonText from '../atoms/ButtonText';

type ButtonProps = {
  className?: string;
  onButtonClick: () => void;
  children: React.ReactNode;
};

export default function Button({
  className,
  onButtonClick,
  children,
}: ButtonProps) {
  return (
    <ButtonBox className={className} onClick={onButtonClick}>
      <ButtonText>{children}</ButtonText>
    </ButtonBox>
  );
}
