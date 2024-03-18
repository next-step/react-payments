import { useRef, useState } from 'react';
import { useProvidedCardFormContext } from './CardFormContext';

export default function useCardPasswordKeyboard() {
  const { handleNumPadClick, handleBackspaceClick } = useProvidedCardFormContext();
  const [showPasswordKeyboard, setShowPasswordKeyboard] = useState(false);
  const passwordKeyboardRef = useRef<HTMLDivElement>(null);

  const handleCardPasswordClick = () => {
    setShowPasswordKeyboard(true);
  };

  const hidePasswordKeyboard = () => {
    setShowPasswordKeyboard(false);
  };

  return {
    showPasswordKeyboard,
    passwordKeyboardRef,
    handleCardPasswordClick,
    hidePasswordKeyboard,
    handleNumPadClick,
    handleBackspaceClick,
  };
}
