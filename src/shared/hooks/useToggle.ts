import { useState } from 'react';

export const useToggle = (initialOpenState?: boolean) => {
  const [toggled, setToggled] = useState(Boolean(initialOpenState));

  const open = () => {
    setToggled(true);
  };

  const close = () => {
    setToggled(false);
  };

  return { value: toggled, open, close };
};
