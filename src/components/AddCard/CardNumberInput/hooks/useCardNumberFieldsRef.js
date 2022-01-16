import { useEffect, useRef } from "react";

import { MAX_LENGTH } from "../../constants";

const moveTarget = ({ currentField, target }) => {
  if (!target || currentField.length !== MAX_LENGTH) {
    return;
  }

  target.focus();
};

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
    moveTarget({ currentField: firstField, target: targets.firstInput });
  }, [firstField]);

  useEffect(() => {
    moveTarget({ currentField: secondField, target: targets.secondInput });
  }, [secondField]);

  useEffect(() => {
    moveTarget({ currentField: thirdField, target: targets.thirdInput });
  }, [thirdField]);

  return {
    firstInput,
    secondInput,
    thirdInput,
    fourthInput,
  };
};

export default useCardNumberFieldsRef;
