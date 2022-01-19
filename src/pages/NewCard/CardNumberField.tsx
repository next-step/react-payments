import { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/Forms/Input/index';
import InputBox from '@/components/Forms/InputBox/InputBox';
import { INIT_CARD_STATE } from '@/constants';

const CardNumberField = ({
  setCardState,
}: {
  setCardState: (v: typeof INIT_CARD_STATE['cardNumber']) => void;
}) => {
  const [state, setCardNumber] = useState(INIT_CARD_STATE['cardNumber']);
  const nextIndex = useRef<number | null>(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (nextIndex.current === null) return;
    inputRef?.current?.focus();

    nextIndex.current = null;
  }, [nextIndex.current]);

  const onChangeHandler = ({
    currentTarget: { value, dataset },
  }: React.ChangeEvent<HTMLInputElement>) => {
    if (value?.length > 4) return;

    const newState = state.map((v, i) =>
      i === Number(dataset.index) ? value : v
    );
    setCardNumber(newState);
    setCardState(newState);

    if (value?.length === 4) {
      nextIndex.current = state.findIndex((v) => !v);
      return;
    }
  };

  return (
    <InputBox>
      <Input
        type='number'
        data-index={0}
        value={state[0]}
        maxLength={4}
        onChange={onChangeHandler}
        ref={nextIndex.current === 0 ? inputRef : null}
      />
      <Input
        type='number'
        data-index={1}
        value={state[1]}
        maxLength={4}
        onChange={onChangeHandler}
        ref={nextIndex.current === 1 ? inputRef : null}
      />
      <Input
        type='password'
        data-index={2}
        value={state[2]}
        maxLength={4}
        onChange={onChangeHandler}
        ref={nextIndex.current === 2 ? inputRef : null}
      />
      <Input
        type='password'
        data-index={3}
        value={state[3]}
        maxLength={4}
        onChange={onChangeHandler}
        ref={nextIndex.current === 3 ? inputRef : null}
      />
    </InputBox>
  );
};

export default CardNumberField;
