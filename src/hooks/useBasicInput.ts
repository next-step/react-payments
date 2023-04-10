import { useRef, useState } from 'react';

export default () => {
  const [text, setText] = useState('');
  const textRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return { text, setText, handleChange, textRef };
};
