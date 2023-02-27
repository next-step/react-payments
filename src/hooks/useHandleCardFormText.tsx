import { useState } from "react";

import { initialCardFormState } from "utils";

export const useHandleCardFormText = () => {
  const [state, setState] = useState(initialCardFormState);

  return {
    state,
    setState,
  };
};

export default useHandleCardFormText;
