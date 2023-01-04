import { Input } from '@/components';
import { getDash } from '@/libs';
import { createRef, KeyboardEvent, useState } from 'react';
import { useCardDispatch } from './CardAddPage.context';

const InputCardNumbers = () => {
  const dispatch = useCardDispatch();

  const inputRefs = Array.from({ length: 4 }).map(() => createRef<HTMLInputElement>());
  const [inputsValid, setInputsValid] = useState(Array.from({ length: 4 }).map(() => false));

  const handleChangeInput = (event: KeyboardEvent<HTMLInputElement>) => {
    const $target = event.target as HTMLInputElement;

    const index = inputRefs.findIndex(({ current }) => current === $target);

    if (event.key === 'Backspace') {
      if ($target.value.length === 0 && index - 1 <= inputRefs.length) {
        return inputRefs[index - 1].current?.focus();
      }

      dispatch({ type: 'SUB_CARD_NUMBER' });
    } else {
      dispatch({ type: 'ADD_CARD_NUMBER', cardNumber: event.key });
    }
    if ($target.value.length !== 4) return;

    const isValid = $target.reportValidity();

    setInputsValid((prev) => {
      const next = [...prev];
      next[index] = isValid;
      return next;
    });

    if (!isValid) {
      return;
    }

    if (index + 1 > inputRefs.length) {
      return;
    }

    inputRefs[index + 1].current?.focus();
  };

  return (
    <Input title="카드 번호">
      <Input.Box>
        <Input.Base
          id="card-numbers-1"
          type="text"
          onKeyUp={handleChangeInput}
          ref={inputRefs[0]}
          maxLength={4}
          minLength={4}
        />
        {getDash(inputsValid[0])}
        <Input.Base
          id="card-numbers-2"
          type="text"
          onKeyUp={handleChangeInput}
          ref={inputRefs[1]}
          maxLength={4}
        />
        {getDash(inputsValid[1])}
        <Input.Base
          id="card-numbers-3"
          type="password"
          onKeyUp={handleChangeInput}
          ref={inputRefs[2]}
          maxLength={4}
        />
        {getDash(inputsValid[2])}
        <Input.Base
          id="card-numbers-4"
          type="password"
          onKeyUp={handleChangeInput}
          ref={inputRefs[3]}
          maxLength={4}
        />
      </Input.Box>
    </Input>
  );
};

export default InputCardNumbers;
