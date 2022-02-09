import { useEffect, useRef } from "react";

import moveFocus from "../../utils/moveFocus";

const useCardNumberFieldsRef = ({ fields }) => {
  const { firstField, secondField, thirdField } = fields;

  const firstInput = useRef(null);
  const secondInput = useRef(null);
  const thirdInput = useRef(null);
  const fourthInput = useRef(null);

  const targets = {
    firstInput: secondInput.current,
    secondInput: thirdInput.current,
    thirdInput: fourthInput.current,
  };

  useEffect(() => {
    moveFocus({
      currentField: firstField,
      target: targets.firstInput,
      maxLength: 4,
    });
  }, [firstField]);

  useEffect(() => {
    moveFocus({
      currentField: secondField,
      target: targets.secondInput,
      maxLength: 4,
    });
  }, [secondField]);

  useEffect(() => {
    moveFocus({
      currentField: thirdField,
      target: targets.thirdInput,
      maxLength: 4,
    });
  }, [thirdField]);

  return {
    firstInput,
    secondInput,
    thirdInput,
    fourthInput,
  };
};

export default useCardNumberFieldsRef;
