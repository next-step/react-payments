import { useMemo, useState } from 'react';

export const useBlur = () => {
  const [dirtyState, setDirtyState] = useState(false);

  return useMemo(
    () => ({
      dirtyState,
      toggleDirtyState: () => setDirtyState(true),
    }),
    [dirtyState]
  );
};
