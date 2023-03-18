import * as Styled from './VirtualKeyBoard.styles';
import type { VirtualKeyBoardProp } from './VirtualKeyBoard.types';
import { initialVirtualKeyBoard } from './utils';
import useVirtualKeyBoard from 'hooks/useVirtualKeyBoard';

const VirtualKeyBoard = ({ mode }: VirtualKeyBoardProp) => {
  const { keyBoardNumbers } = useVirtualKeyBoard();

  return (
    <Styled.Layout>
      {mode === 'password' ? <Styled.Title>비밀번호 입력</Styled.Title> : <Styled.Title>CVC 입력</Styled.Title>}
      <Styled.PasswordInput type="password" theme="underline" active={true} maxLength={4} />
      <Styled.KeyContainer>
        {keyBoardNumbers}
        <Styled.Key>clear</Styled.Key>
        <Styled.Key>x</Styled.Key>
      </Styled.KeyContainer>
    </Styled.Layout>
  );
};

export default VirtualKeyBoard;
