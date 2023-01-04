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
    const isValid = $target.checkValidity();
    const index = inputRefs.findIndex(({ current }) => current === $target);

    setInputsValid((prev) => {
      const next = [...prev];
      next[index] = isValid;
      return next;
    });

    if ($target.value.length === 4) {
      if (inputRefs.length - 1 === index) {
        return;
      }

      return inputRefs[index + 1].current?.focus();
    }
  };

  return (
    <Input title="카드 번호">
      <Input.Box>
        <Input.Base
          id="card-numbers-1"
          type="text"
          // onKeyUp={handleChangeInput}
          ref={inputRefs[0]}
          pattern="[0-9]+"
          minLength={4}
          maxLength={4}
          autoFocus
          required
        />
        {getDash(inputsValid[0])}
        <Input.Base
          id="card-numbers-2"
          type="text"
          // onKeyUp={handleChangeInput}
          ref={inputRefs[1]}
          pattern="[0-9]+"
          minLength={4}
          maxLength={4}
          required
        />
        {getDash(inputsValid[1])}
        <Input.Base
          id="card-numbers-3"
          type="password"
          // onKeyUp={handleChangeInput}
          ref={inputRefs[2]}
          pattern="[0-9]+"
          minLength={4}
          maxLength={4}
          required
        />
        {getDash(inputsValid[2])}
        <Input.Base
          id="card-numbers-4"
          type="password"
          // onKeyUp={handleChangeInput}
          ref={inputRefs[3]}
          pattern="[0-9]+"
          minLength={4}
          maxLength={4}
          required
        />
      </Input.Box>
    </Input>
  );
};

export default InputCardNumbers;
