import Styled from "./InputWrapper.styles";

interface Props {
  label: string;
  labelFor: string;
  children?: React.ReactNode;
}

const InputWrapper = ({ label, labelFor, children }: Props) => {
  return (
    <div>
      <Styled.Label htmlFor={labelFor}>{label}</Styled.Label>
      <Styled.InputArea>{children}</Styled.InputArea>
    </div>
  );
};

export default InputWrapper;
export { Props };
