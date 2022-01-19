import { useState } from "react";

const useAddCardFormFields = () => {
  const [fields, setFields] = useState({
    cardNumbers: {
      firstField: "",
      secondField: "",
      thirdField: "",
      fourthField: "",
    },
    expiryDate: {
      monthField: "",
      yearField: "",
    },
    cardOwner: "",
    securityNumber: "",
    cardPassword: {
      firstField: "",
      secondField: "",
    },
  });

  const handleChangeSingleInput = ({ name, value }) => {
    setFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeMultipleInput = ({ key, name, value }) => {
    setFields((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [name]: value,
      },
    }));
  };

  return {
    fields,
    handleChangeSingleInput,
    handleChangeMultipleInput,
  };
};

export default useAddCardFormFields;
