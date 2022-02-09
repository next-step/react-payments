import { useEffect, useRef } from "react";

import moveFocus from "../../utils/moveFocus";

const usePasswordDateFieldsRef = ({ fields }) => {
  const { firstField } = fields;

  const firstInput = useRef(null);
  const secondInput = useRef(null);

  const targets = {
    firstInput: secondInput.current,
  };

  useEffect(() => {
    moveFocus({
      currentField: firstField,
      target: targets.firstInput,
      maxLength: 1,
    });
  }, [firstField]);

  return {
    firstInput,
    secondInput,
  };
};

export default usePasswordDateFieldsRef;
