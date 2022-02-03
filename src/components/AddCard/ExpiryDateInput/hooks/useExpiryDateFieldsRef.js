import { useEffect, useRef } from "react";

import moveFocus from "../../utils/moveFocus";

const useExpiryDateFieldsRef = ({ fields }) => {
  const { monthField } = fields;

  const monthInput = useRef(null);
  const yearInput = useRef(null);

  const targets = {
    monthInput: yearInput.current,
  };

  useEffect(() => {
    moveFocus({
      currentField: monthField,
      target: targets.monthInput,
      maxLength: 2,
    });
  }, [monthField]);

  return {
    monthInput,
    yearInput,
  };
};

export default useExpiryDateFieldsRef;
