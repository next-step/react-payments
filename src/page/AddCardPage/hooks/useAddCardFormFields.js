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
    error: {
      expiryDate: false,
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

  const handleErrorChange = ({ key, error }) => {
    setFields((prev) => ({
      ...prev,
      error: {
        ...error,
        [key]: error,
      },
    }));
  };

  return {
    fields,
    handleChangeSingleInput,
    handleChangeMultipleInput,
    handleErrorChange,
  };
};

export default useAddCardFormFields;
