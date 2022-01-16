import { useState } from "react";

import { MAX_LENGTH } from "../../constants";

const useCardNumberFields = () => {
  const [fields, setFields] = useState({
    firstField: "",
    secondField: "",
    thirdField: "",
    fourthField: "",
  });

  const handleChange = ({ name, value }) => {
    if (value.length > MAX_LENGTH) {
      return;
    }

    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return {
    fields,
    handleChange,
  };
};

export default useCardNumberFields;
