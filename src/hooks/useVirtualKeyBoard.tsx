// 버튼을 누르면 input에 값이 찍히게
import { initialVirtualKeyBoard } from 'components/common/VirtualKeyBoard/utils';
import { Key } from 'components/common/VirtualKeyBoard/VirtualKeyBoard.styles';
import { useRef } from 'react';

// clear는 input값 다지움 , x는 한글자씩만지움
const useVirtualKeyBoard = () => {
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleKeyBoard = (e) => {
    if (!passwordRef.current) return;
    const prevValue = passwordRef.current.value;
    passwordRef.current.value = prevValue + e.target.value;
  };
  const deleteInput = () => {
    if (!passwordRef.current) return;
    const currentPassword = passwordRef.current.value;
    const nextPassword = currentPassword.slice(0, currentPassword.length - 1);
    passwordRef.current.value = nextPassword;
  };
  const clearInput = () => {
    if (!passwordRef.current) return;
    passwordRef.current.value = '';
  };

  const keyBoardNumbers = initialVirtualKeyBoard().map((number) => (
    <Key key={number} value={number} onClick={handleKeyBoard}>
      {number}
    </Key>
  ));

  return { passwordRef, keyBoardNumbers, clearInput, deleteInput };
};

export default useVirtualKeyBoard;
