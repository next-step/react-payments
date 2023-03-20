import * as Styled from './VirtualKeyBoard.styles';
import useVirtualKeyBoard from 'hooks/useVirtualKeyBoard';
import type { VirtualKeyBoardProps } from './VirtualKeyBoard.types';

const VirtualKeyBoard = ({ refs }: VirtualKeyBoardProps) => {
  const { passwordRef, keyBoardNumbers, clearInput, deleteInput, isOpen, mode } = useVirtualKeyBoard(refs);

  return isOpen ? (
    <Styled.Layout>
      {mode === 'password' ? <Styled.Title>비밀번호 입력</Styled.Title> : <Styled.Title>CVC 입력</Styled.Title>}
      <Styled.PasswordInput type="password" theme="underline" active={true} ref={passwordRef} disabled={true} />
      <Styled.KeyContainer>
        {keyBoardNumbers}
        <Styled.Key onClick={clearInput}>clear</Styled.Key>
        <Styled.Key onClick={deleteInput}>x</Styled.Key>
      </Styled.KeyContainer>
    </Styled.Layout>
  ) : (
    <></>
  );
};

export default VirtualKeyBoard;
