import { useState } from "react";

import { ColorType, CompanyType } from "types";
import { inistalCardState } from "utils";

export const useHandleCardText = () => {
  const [state, setState] = useState(inistalCardState);

  return {
    state,
    setState,
  };
};

export default useHandleCardText;
