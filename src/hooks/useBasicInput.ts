import { useCallback, useRef, useState } from 'react';

export default () => {
  const [text, setText] = useState('');
  const textRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [text, setText]
  );

  return { text, setText, handleChange, textRef };
};
