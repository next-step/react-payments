import * as Styled from './VirtualKeyBoard.styles';

const VirtualKeyBoard = () => {
  return (
    <Styled.Layout>
      <Styled.Title>비밀번호 입력</Styled.Title>
      <Styled.InputContainer>
        <Styled.PasswordInput type="password" theme="underline" active={true} maxLength={1} />
        <Styled.PasswordInput type="password" theme="underline" active={true} maxLength={1} />
        <Styled.PasswordInput type="password" theme="underline" active={true} maxLength={1} />
        <Styled.PasswordInput type="password" theme="underline" active={true} maxLength={1} />
      </Styled.InputContainer>
      <Styled.KeyContainer>
        <Styled.Key>1</Styled.Key>
        <Styled.Key>2</Styled.Key>
        <Styled.Key>3</Styled.Key>
        <Styled.Key>4</Styled.Key>
        <Styled.Key>5</Styled.Key>
        <Styled.Key>6</Styled.Key>
        <Styled.Key>7</Styled.Key>
        <Styled.Key>8</Styled.Key>
        <Styled.Key>9</Styled.Key>
        <Styled.Key>0</Styled.Key>
        <Styled.Key>clear</Styled.Key>
        <Styled.Key>x</Styled.Key>
      </Styled.KeyContainer>
    </Styled.Layout>
  );
};

export default VirtualKeyBoard;
