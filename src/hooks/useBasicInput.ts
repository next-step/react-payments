import { useCallback, useRef, useState } from 'react';

const useBasicInput = () => {
  const [text, setText] = useState('');
  const textRef = useRef<HTMLInputElement>(null);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setText(() => event.target.value);
  }, []);

  return { text, setText, handleChange, textRef };
};

export default useBasicInput;
