import * as Styled from './VirtualKeyBoard.styles';
import type { VirtualKeyBoardProp } from './VirtualKeyBoard.types';
import useVirtualKeyBoard from 'hooks/useVirtualKeyBoard';

const VirtualKeyBoard = ({ mode }: VirtualKeyBoardProp) => {
  const { passwordRef, keyBoardNumbers, clearInput, deleteInput } = useVirtualKeyBoard();

  return (
    <Styled.Layout>
      {mode === 'password' ? <Styled.Title>비밀번호 입력</Styled.Title> : <Styled.Title>CVC 입력</Styled.Title>}
      <Styled.PasswordInput
        type="password"
        theme="underline"
        active={true}
        maxLength={4}
        ref={passwordRef}
        disabled={true}
      />

      <Styled.KeyContainer>
        {keyBoardNumbers}
        <Styled.Key onClick={clearInput}>clear</Styled.Key>
        <Styled.Key onClick={deleteInput}>x</Styled.Key>
      </Styled.KeyContainer>
    </Styled.Layout>
  );
};

export default VirtualKeyBoard;
