import { useState, useCallback, ChangeEvent } from 'react';

type UseCheckboxResult = {
  checked: boolean;
  change: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const useCheckbox = (initialChecked = false): UseCheckboxResult => {
  const [checked, setChecked] = useState(initialChecked);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.checked);
  }, []);

  return {
    checked,
    change: handleChange,
  };
};
