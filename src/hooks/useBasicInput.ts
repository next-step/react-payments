import { FormEvent, useState } from 'react';

export default () => {
  const [text, setText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return { text, setText, handleChange };
};
