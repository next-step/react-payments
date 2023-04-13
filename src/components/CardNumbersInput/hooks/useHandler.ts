import { useEffect } from 'react';
import { CARD_INPUT } from '../../../constants';

type THookHandler = {
  cardNumbers: string[];
  onChange?: (newCardNumbers: string[]) => void;
  nextRef?: React.RefObject<HTMLInputElement | HTMLButtonElement>;
  refs: React.RefObject<HTMLInputElement | HTMLButtonElement>[];
};

const { CARD_NUMBER } = CARD_INPUT;

export default ({ cardNumbers, onChange, nextRef, refs }: THookHandler) => {
  useEffect(() => {
    const lengths = cardNumbers.map((value) => value.length);
    const targetIndex = lengths.findIndex((length) => length !== CARD_NUMBER.EACH_LENGTH);

    if (!targetIndex) return;

    const nextInput = refs[targetIndex]?.current;
    if (nextInput !== document.activeElement) {
      nextInput?.focus();
    }
  }, [cardNumbers]);

  const handleChange = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers.slice(0, index), value, ...cardNumbers.slice(index + 1)];

    onChange?.(newCardNumbers);
    if (value.length === CARD_NUMBER.EACH_LENGTH) {
      focusNext(index);
    }

    handleFulfilled(value, index);
  };

  const handleFulfilled = (value: string, index: number) => {
    const newCardNumbers = [...cardNumbers.slice(0, index), value, ...cardNumbers.slice(index + 1)];

    if (
      // prettier-ignore
      newCardNumbers.filter(
        (s) => s.length === CARD_NUMBER.EACH_LENGTH
      ).length === CARD_NUMBER.LENGTH
    ) {
      nextRef?.current?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    const [target, key] = [event.target as HTMLInputElement, event.key];
    const [length, position] = [target.value.length, target.selectionStart];

    const triggerKeys = {
      previous: ['ArrowUp', 'ArrowLeft', 'Backspace'],
      next: ['ArrowDown', 'ArrowRight', 'Enter'],
    };

    if (triggerKeys.previous.includes(key) && position === 0) {
      focusPrev(index);
    } else if (triggerKeys.next.includes(key) && position === length) {
      focusNext(index);
    }
  };

  const focusPrev = (index: number) => {
    refs[index - 1]?.current?.focus();
  };

  const focusNext = (index: number) => {
    refs[index + 1]?.current?.focus();
  };

  return { handleChange, handleFulfilled, handleKeyDown, focusPrev, focusNext };
};
