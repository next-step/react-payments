import { useState } from 'react';

export const useBlur = () => {
  const [dirtyState, setDirtyState] = useState(false);

  return {
    dirtyState,
    makeDirty: () => setDirtyState(true),
  };
};
