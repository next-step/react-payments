import { initialVirtualKeyBoard } from 'components/common/VirtualKeyBoard/utils';
import { Key } from 'components/common/VirtualKeyBoard/VirtualKeyBoard.styles';
import { VirtualKeyBoardContext } from 'context/VirtualKeyBoard';
import { useContext, useRef } from 'react';
import { isValidPasswordNumber, isValidSecurityCode } from 'utils/InputValidation';
import type { CardFormInputRefsType } from 'types';
type ModeType = 'cvc' | 'password';

const useVirtualKeyBoard = (formInputRef: CardFormInputRefsType) => {
  const passwordRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(VirtualKeyBoardContext);
  const isOpen = ctx.isOpen;
  const mode = ctx.mode;

  const handleKeyBoard = (e) => {
    if (!passwordRef.current) return;
    const currentValue = passwordRef.current.value;
    const nextValue = currentValue + e.target.value;
    passwordRef.current.value = nextValue;

    if (mode === 'cvc' && isValidSecurityCode(nextValue)) {
      if (!formInputRef.cvc) return;
      formInputRef.cvc.value = nextValue;
      ctx.hide();
    } else if (mode === 'password' && isValidPasswordNumber(nextValue)) {
      if (!formInputRef.password) return;
      formInputRef.password.value = nextValue;
      ctx.hide();
    }
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

  const showUI = (type: ModeType) => {
    ctx.setUI(type);
    ctx.show();
  };

  const keyBoardNumbers = initialVirtualKeyBoard().map((number) => (
    <Key key={number} value={number} onClick={handleKeyBoard}>
      {number}
    </Key>
  ));

  return { passwordRef, keyBoardNumbers, clearInput, deleteInput, showUI, isOpen, mode };
};

export default useVirtualKeyBoard;
