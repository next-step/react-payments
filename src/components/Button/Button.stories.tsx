import { ComponentMeta } from '@storybook/react';
import { useState } from 'react';

import Button from './Button';

export default {
  title: 'Button',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary = () => {
  const [value, setValue] = useState('Secondary');
  const [isPrimary, setIsPrimary] = useState(false);

  const handleOnChange = () => {
    if (!isPrimary) {
      setIsPrimary(true);
      setValue('Primary');
    }
  };

  return (
    <>
      <div>{value}</div>
      <Button onClick={handleOnChange}>확인</Button>
    </>
  );
};
